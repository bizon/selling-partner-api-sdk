import * as childProcess from 'node:child_process'
import {promisify} from 'node:util'

const exec = promisify(childProcess.exec)

interface RunCommandOptions {
  quiet?: boolean
}

export async function runCommand(command: string, {quiet = false}: RunCommandOptions = {}) {
  if (!quiet) {
    console.info(`Running: ${command}`)
  }

  return exec(command)
}
