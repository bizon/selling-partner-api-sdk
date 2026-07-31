import {describe, expect, it} from '@jest/globals'

import {buildUpstreamSection} from '../../utils/pull-request.js'

const PREVIOUS_SHA = '185fbc8666d1a8ab4bbbcbc4b1b47c7d3b6dbb0e'
const SHA = 'af0be99a754fba53d46d6a845a5aba8f99f077c4'

const RANGE = {pathspec: 'models', from: PREVIOUS_SHA, to: SHA}

describe('buildUpstreamSection', () => {
  it('lists the commits, linked to the upstream repository', () => {
    const [heading, description, list] = buildUpstreamSection(
      [
        {sha: SHA, subject: 'Update Finances model'},
        {sha: PREVIOUS_SHA, subject: 'Update Fulfillment Outbound'},
      ],
      RANGE,
    )

    expect(heading).toBe('### Upstream commits')
    expect(description).toBe(
      `[2 commits](https://github.com/amzn/selling-partner-api-models/compare/${PREVIOUS_SHA}...${SHA}) touched \`models\` since the last update:`,
    )
    // `owner/repo@sha` – the form GitHub records as a reference on the commit
    expect(list).toBe(
      [
        `- amzn/selling-partner-api-models@${SHA} Update Finances model`,
        `- amzn/selling-partner-api-models@${PREVIOUS_SHA} Update Fulfillment Outbound`,
      ].join('\n'),
    )
  })

  it('counts a single commit in the singular', () => {
    const [, description] = buildUpstreamSection([{sha: SHA, subject: 'Update Finances'}], RANGE)

    expect(description).toContain('[1 commit](')
  })

  it('names the path the generator reads', () => {
    const [, description] = buildUpstreamSection([{sha: SHA, subject: 'Model updates'}], {
      ...RANGE,
      pathspec: 'schemas',
    })

    expect(description).toContain('touched `schemas`')
  })

  // Rendered as-is, they would cross-reference an issue of this repository or
  // notify an unrelated user
  it('escapes what GitHub would autolink in a subject', () => {
    const section = buildUpstreamSection([{sha: SHA, subject: 'Fix #123 by @someone'}], RANGE)

    expect(section.at(-1)).toContain(String.raw`Fix \#123 by \@someone`)
  })

  it('is left out when there is nothing to report', () => {
    expect(buildUpstreamSection([], RANGE)).toStrictEqual([])
  })

  // Nothing has been recorded yet – there is no range to compare against
  it('is left out when the previous commit is unknown', () => {
    expect(
      buildUpstreamSection([{sha: SHA, subject: 'Update Finances model'}], {
        ...RANGE,
        from: undefined,
      }),
    ).toStrictEqual([])
  })
})
