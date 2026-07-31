import {beforeEach, describe, expect, it, jest} from '@jest/globals'

import {logger} from '../../utils/logger.js'
import {getUpstreamCommits, parseCommitLog, parseUpstreamCommit} from '../../utils/upstream.js'

const SHA = 'af0be99a754fba53d46d6a845a5aba8f99f077c4'
const OTHER_SHA = '185fbc8666d1a8ab4bbbcbc4b1b47c7d3b6dbb0e'

describe('parseUpstreamCommit', () => {
  it('reads a recorded commit, however it was written', () => {
    expect(parseUpstreamCommit(`${SHA}\n`)).toBe(SHA)
    expect(parseUpstreamCommit(`  ${SHA}  `)).toBe(SHA)
  })

  // Whatever it holds would otherwise reach a shell command
  it('refuses anything that is not a commit hash', () => {
    expect(parseUpstreamCommit('')).toBeUndefined()
    expect(parseUpstreamCommit('HEAD')).toBeUndefined()
    expect(parseUpstreamCommit(SHA.slice(0, 7))).toBeUndefined()
    expect(parseUpstreamCommit(`${SHA} -- .`)).toBeUndefined()
    expect(parseUpstreamCommit(`${SHA}; echo pwned`)).toBeUndefined()
  })
})

describe('getUpstreamCommits', () => {
  beforeEach(() => {
    jest.spyOn(logger, 'warn').mockReturnValue(logger)
  })

  it('reports nothing when no commit was recorded', async () => {
    await expect(
      getUpstreamCommits({pathspec: 'models', from: undefined, to: SHA}),
    ).resolves.toStrictEqual([])
  })

  // Dropped before it reaches git, so no command fails and nothing is logged
  it('reports nothing for a recorded commit that is not a hash', async () => {
    await expect(
      getUpstreamCommits({pathspec: 'models', from: 'HEAD~1; echo pwned', to: SHA}),
    ).resolves.toStrictEqual([])

    expect(logger.warn).not.toHaveBeenCalled()
  })
})

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
