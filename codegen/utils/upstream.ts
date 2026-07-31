import fs from 'node:fs/promises'

import {logger} from './logger.js'
import {runCommand} from './run-command.js'

export const UPSTREAM_REPOSITORY = 'amzn/selling-partner-api-models'
export const UPSTREAM_URL = `https://github.com/${UPSTREAM_REPOSITORY}`

// Where `generate.ts` clones the models repository
const UPSTREAM_PATH = 'selling-partner-api-models'

// `<sha>\t<subject>` lines, as printed by `git log --format=%H%x09%s`
const COMMIT_REGEX = /^(?<sha>[\da-f]{40})\t(?<subject>.*)$/v

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

// The upstream commit the generated code was built from, committed to this
// repository. Amazon's models are not vendored here, so it is the only way to
// tell which upstream changes a pull request brings in.
export async function readUpstreamCommit(path: string) {
  try {
    const contents = await fs.readFile(path, 'utf8')
    const sha = contents.trim()

    return sha.length > 0 ? sha : undefined
  } catch {
    // Not recorded yet – the first run against a generator reports no commits
    // and records one for the next.
    return undefined
  }
}

export async function writeUpstreamCommit(path: string, sha: string) {
  await fs.writeFile(path, `${sha}\n`)
}

export async function getUpstreamHead() {
  const {stdout} = await runCommand(`git -C ${UPSTREAM_PATH} rev-parse HEAD`, {quiet: true})

  return stdout.trim()
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
  if (from === undefined || from === to) {
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
