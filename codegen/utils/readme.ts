import fs from 'node:fs/promises'

// The generated lists live inside hand-written READMEs, delimited by HTML
// comments so the surrounding prose stays editable. A missing marker throws
// rather than silently leaving a stale list behind.
export async function replaceReadmeSection(readmePath: string, name: string, content: string) {
  const readme = await fs.readFile(readmePath, 'utf8')

  const start = `<!-- codegen:${name}:start -->`
  const end = `<!-- codegen:${name}:end -->`

  const pattern = new RegExp(`${RegExp.escape(start)}.*?${RegExp.escape(end)}`, 'sv')

  if (!pattern.test(readme)) {
    throw new Error(`Could not find ${name} markers (${start} / ${end}) in ${readmePath}`)
  }

  const replacement = `${start}\n\n${content}\n\n${end}`

  await fs.writeFile(
    readmePath,
    readme.replace(pattern, () => replacement),
  )
}
