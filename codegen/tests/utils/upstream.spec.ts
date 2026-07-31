import {describe, expect, it} from '@jest/globals'

import {parseCommitLog} from '../../utils/upstream.js'

const SHA = 'af0be99a754fba53d46d6a845a5aba8f99f077c4'
const OTHER_SHA = '185fbc8666d1a8ab4bbbcbc4b1b47c7d3b6dbb0e'

describe('parseCommitLog', () => {
  it('reads the `<sha>\\t<subject>` lines git log prints', () => {
    const log = [`${SHA}\tUpdate Finances model`, `${OTHER_SHA}\tUpdate Fulfillment Outbound`].join(
      '\n',
    )

    expect(parseCommitLog(log)).toStrictEqual([
      {sha: SHA, subject: 'Update Finances model'},
      {sha: OTHER_SHA, subject: 'Update Fulfillment Outbound'},
    ])
  })

  it('keeps tabs inside a subject', () => {
    expect(parseCommitLog(`${SHA}\tUpdate\tFinances model`)).toStrictEqual([
      {sha: SHA, subject: 'Update\tFinances model'},
    ])
  })

  it('returns nothing for an empty log', () => {
    expect(parseCommitLog('')).toStrictEqual([])
    expect(parseCommitLog('\n')).toStrictEqual([])
  })

  it('ignores lines that are not a commit', () => {
    expect(parseCommitLog(`warning: something\n${SHA}\tUpdate Finances model`)).toStrictEqual([
      {sha: SHA, subject: 'Update Finances model'},
    ])
  })
})
