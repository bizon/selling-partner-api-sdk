import {OpenAPIV3} from 'openapi-types'

import {logger} from './logger.js'

const HTTP_METHODS = new Set<string>(Object.values(OpenAPIV3.HttpMethods))

// The usage plan table Amazon documents at the end of every operation
// description, in either its two-column form or its legacy `|Default|` one
const RATE_LIMIT_REGEX =
  /Rate \(requests per second\) \| Burst \|\n(?:\| -{4} )+\|\n(?:\|Default)?\| (?<rate>(?:\d*\.)?\d+) \| (?<burst>(?:\d*\.)?\d+) \|/v

// The heading above the table. Matching on it rather than on the table itself
// means a usage plan Amazon reformats is reported as unreadable instead of
// silently counted as undocumented.
const USAGE_PLAN_MARKER = 'Usage Plan'

export interface RateLimit {
  method: string
  rate: number
  burst: number
  /** Source of a `v` flagged regular expression, inlined as-is in the client. */
  urlRegex: string
}

interface UsagePlans {
  rateLimits: RateLimit[]
  /** Operations Amazon documents no usage plan for. */
  undocumented: string[]
  /** Operations whose usage plan table could not be read. */
  unparsable: string[]
}

// Path parameters stand for a single path segment, so anything but a separator
// matches. The result is matched against the pathname of a request URL, which
// is why it is anchored on both ends.
function buildUrlRegex(path: string) {
  const source = path
    .split(/\{[^\{\}]+\}/v)
    .map((literal) => RegExp.escape(literal))
    .join(String.raw`[^\/]*`)

  return `/^${source}$/v`
}

function readPathItemUsagePlans(path: string, pathItem: OpenAPIV3.PathItemObject): UsagePlans {
  const plans: UsagePlans = {rateLimits: [], undocumented: [], unparsable: []}

  // Walking the document order rather than `OpenAPIV3.HttpMethods` keeps the
  // generated rate limits in the order Amazon declares its operations
  for (const key of Object.keys(pathItem)) {
    // A path item also holds non-operation keys – `parameters` and Amazon's
    // `x-amzn-api-sandbox` extensions
    if (!HTTP_METHODS.has(key)) {
      continue
    }

    const operation = pathItem[key as OpenAPIV3.HttpMethods]
    const description = operation?.description ?? ''
    const result = RATE_LIMIT_REGEX.exec(description)

    if (result?.groups) {
      plans.rateLimits.push({
        method: key,
        rate: Number(result.groups.rate),
        burst: Number(result.groups.burst),
        urlRegex: buildUrlRegex(path),
      })
    } else if (description.includes(USAGE_PLAN_MARKER)) {
      plans.unparsable.push(`${key.toUpperCase()} ${path}`)
    } else {
      plans.undocumented.push(`${key.toUpperCase()} ${path}`)
    }
  }

  return plans
}

export function extractRateLimits(document: OpenAPIV3.Document, packageName: string): RateLimit[] {
  const plans = Object.entries(document.paths ?? {}).flatMap(([path, pathItem]) =>
    pathItem ? [readPathItemUsagePlans(path, pathItem)] : [],
  )

  const rateLimits = plans.flatMap(({rateLimits}) => rateLimits)
  const undocumented = plans.flatMap(({undocumented}) => undocumented)
  const unparsable = plans.flatMap(({unparsable}) => unparsable)

  // Amazon leaves the usage plan out entirely for some operations – there is
  // nothing to extract, so only the count is worth reporting
  if (undocumented.length > 0) {
    logger.info(`no usage plan documented for ${undocumented.length} operation(s)`, {packageName})
  }

  // A table Amazon does publish but we fail to read means either a format
  // change or placeholder values – name the operations so a rate limit
  // silently disappearing is visible in the codegen pull request
  if (unparsable.length > 0) {
    logger.warn(`could not read the usage plan of ${unparsable.join(', ')}`, {packageName})
  }

  return rateLimits
}
