import {runCommand} from './run-command.js'

// Paths under `pathspec` that differ from HEAD – modified, deleted or untracked.
// Renames are disabled so that every entry is a plain `XY <path>` line.
export async function getChangedPaths(pathspec: string) {
  const {stdout} = await runCommand(
    `git status --porcelain=v1 --untracked-files=all --no-renames -- ${pathspec}`,
    {quiet: true},
  )

  return stdout
    .split('\n')
    .filter(Boolean)
    .map((line) => line.slice(3).trim())
}
