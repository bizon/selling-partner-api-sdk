import fs from 'node:fs/promises'

import {isNodeError} from './error.js'
import {logger} from './logger.js'
import {runCommand} from './run-command.js'

export const UPSTREAM_REPOSITORY = 'amzn/selling-partner-api-models'
export const UPSTREAM_URL = `https://github.com/${UPSTREAM_REPOSITORY}`

// Where `generate.ts` clones the models repository
const UPSTREAM_PATH = 'selling-partner-api-models'

// `<sha>\t<subject>` lines, as printed by `git log --format=%H%x09%s`
const COMMIT_REGEX = /^(?<sha>[\da-f]{40})\t(?<subject>.*)$/v

const COMMIT_SHA_REGEX = /^[\da-f]{40}$/v

export interface UpstreamCommit {
  sha: string
  subject: string
}

export interface UpstreamRange {
  /** Path in the models repository the generator reads. */
  pathspec: string
  /** Recorded commit the checked-in output was generated from, if any. */
  from: string | undefined
  /** Commit the clone is at. */
  to: string
}

// A commit hash on its own, as `writeUpstreamCommit` records it. Anything else
// – a hand edit, a truncated write – is refused rather than handed to git.
export function parseUpstreamCommit(contents: string) {
  const sha = contents.trim()

  return COMMIT_SHA_REGEX.test(sha) ? sha : undefined
}

// The upstream commit the generated code was built from, committed to this
// repository. Amazon's models are not vendored here, so it is the only way to
// tell which upstream changes a pull request brings in.
export async function readUpstreamCommit(path: string) {
  let contents: string

  try {
    contents = await fs.readFile(path, 'utf8')
  } catch (error: unknown) {
    if (isNodeError(error, Error) && error.code === 'ENOENT') {
      // Not recorded yet – the first run for a generator reports no commits
      // and records one for the next.
      return undefined
    }

    throw error
  }

  const sha = parseUpstreamCommit(contents)

  if (sha === undefined) {
    logger.warn(`Ignoring ${path}: it does not hold a commit hash`)
  }

  return sha
}

export async function writeUpstreamCommit(path: string, sha: string) {
  await fs.writeFile(path, `${sha}\n`)
}

export async function getUpstreamHead() {
  const {stdout} = await runCommand(`git -C ${UPSTREAM_PATH} rev-parse HEAD`, {quiet: true})
  const sha = stdout.trim()

  // Everything is generated from this clone, so a head that cannot be read
  // discredits the whole run, not just this section of the body
  if (!COMMIT_SHA_REGEX.test(sha)) {
    throw new Error(`Could not read the head of the ${UPSTREAM_PATH} clone: ${sha}`)
  }

  return sha
}

export function parseCommitLog(log: string): UpstreamCommit[] {
  return log
    .split('\n')
    .map((line) => {
      const result = COMMIT_REGEX.exec(line)

      return result?.groups
        ? {sha: result.groups.sha, subject: result.groups.subject.trim()}
        : undefined
    })
    .filter((commit) => commit !== undefined)
}

// Upstream commits touching `pathspec` over the range, newest first. Merge
// commits are left out – they carry no content of their own.
export async function getUpstreamCommits({
  pathspec,
  from,
  to,
}: UpstreamRange): Promise<UpstreamCommit[]> {
  // The range is interpolated into a shell command, and `from` reaches here
  // from a file in the repository – nothing but a commit hash goes through.
  // `to` is checked where it is read, and `pathspec` is a constant of the
  // generator calling in.
  if (from === undefined || from === to || !COMMIT_SHA_REGEX.test(from)) {
    return []
  }

  try {
    const {stdout} = await runCommand(
      `git -C ${UPSTREAM_PATH} log --no-merges --format=%H%x09%s ${from}..${to} -- ${pathspec}`,
      {quiet: true},
    )

    return parseCommitLog(stdout)
  } catch (error) {
    // The recorded commit is unknown to the clone – upstream rewrote its
    // history. Not worth failing the generation over: the pull request goes
    // without the section, and this run records a commit that resolves again.
    logger.warn(`Could not list upstream commits since ${from}: ${String(error)}`)

    return []
  }
}
