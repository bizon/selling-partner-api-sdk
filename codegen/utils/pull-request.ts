import fs from 'node:fs/promises'

import {
  UPSTREAM_REPOSITORY,
  UPSTREAM_URL,
  type UpstreamCommit,
  type UpstreamRange,
} from './upstream.js'

const INTRO = [
  `This is an automated pull request that was generated due to changes detected in the [Amazon Selling Partner API models](${UPSTREAM_URL}).`,
  'The branch associated with this PR will be automatically updated if other changes occur.',
]

const BODY_WIDTH = 72

export function formatDate() {
  return new Date().toISOString().slice(0, 10)
}

function wrap(text: string) {
  const lines: string[] = []
  let line = ''

  for (const word of text.split(' ')) {
    if (line.length === 0) {
      line = word
    } else if (`${line} ${word}`.length <= BODY_WIDTH) {
      line += ` ${word}`
    } else {
      lines.push(line)
      line = word
    }
  }

  if (line.length > 0) {
    lines.push(line)
  }

  return lines.join('\n')
}

export function buildSection(heading: string, description: string, items: string[]) {
  if (items.length === 0) {
    return []
  }

  return [`### ${heading}`, description, items.map((item) => `- \`${item}\``).join('\n')]
}

// Upstream subjects are quoted verbatim, and a `#123` or `@handle` in one would
// otherwise autolink – cross-referencing an unrelated issue of this repository,
// or notifying whoever owns that handle.
function escapeAutolinks(subject: string) {
  return subject.replaceAll(/[#@]/gv, (character) => `\\${character}`)
}

// Amazon's models are not vendored in this repository, so the diff of a codegen
// pull request only shows the generated output – the upstream commits behind it
// are listed here, to be reviewed alongside.
//
// Each is written as `owner/repo@sha` rather than as a link to it: that is the
// form GitHub treats as a reference to the commit, not merely a URL pointing at
// one.
export function buildUpstreamSection(
  commits: UpstreamCommit[],
  {pathspec, from, to}: UpstreamRange,
) {
  if (commits.length === 0 || from === undefined) {
    return []
  }

  const count = `${commits.length} ${commits.length === 1 ? 'commit' : 'commits'}`

  return [
    '### Upstream commits',
    `[${count}](${UPSTREAM_URL}/compare/${from}...${to}) touched \`${pathspec}\` since the last update:`,
    commits
      .map(({sha, subject}) => `- ${UPSTREAM_REPOSITORY}@${sha} ${escapeAutolinks(subject)}`)
      .join('\n'),
  ]
}

// Consumed by the codegen workflow, which hands the file to `create-pull-request`
// via `body-path`. Always write it, so that re-running against an existing branch
// cannot leave a stale body behind.
export async function writePullRequestBody(path: string, sections: string[] = []) {
  await fs.writeFile(path, `${[...INTRO, ...sections].join('\n\n')}\n`)
}

// The repository only allows squash merges, and squashes take their body from
// the branch commit messages rather than the pull request body – so a removal
// has to be flagged here for lerna to cut the release as a major.
export async function writeCommitMessage(path: string, subject: string, breakingChange?: string) {
  const message =
    breakingChange === undefined
      ? subject
      : `${subject}\n\n${wrap(`BREAKING CHANGE: ${breakingChange}`)}`

  await fs.writeFile(path, `${message}\n`)
}
