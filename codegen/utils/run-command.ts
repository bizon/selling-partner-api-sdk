import * as childProcess from 'node:child_process'

interface RunCommandOptions {
  quiet?: boolean
}

export async function runCommand(command: string, {quiet = false}: RunCommandOptions = {}) {
  if (!quiet) {
    console.info(`Running: ${command}`)
  }

  return new Promise<{stdout: string; stderr: string}>((resolve, reject) => {
    childProcess.exec(command, (error, stdout, stderr) => {
      if (error) {
        reject(error)
        return
      }

      resolve({stdout, stderr})
    })
  })
}
