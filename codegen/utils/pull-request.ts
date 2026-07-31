import fs from 'node:fs/promises'

const INTRO = [
  'This is an automated pull request that was generated due to changes detected in the [Amazon Selling Partner API models](https://github.com/amzn/selling-partner-api-models).',
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
