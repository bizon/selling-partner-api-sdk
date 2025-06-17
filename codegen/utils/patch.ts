import {readdir} from 'node:fs/promises'
import {join as joinPath} from 'node:path'

import fjp, {type Operation} from 'fast-json-patch'
import {readFile as readJsonFile} from 'jsonfile'
import {type OpenAPIV3} from 'openapi-types'

import {instanceOfNodeError} from './error.js'

interface Patch {
  operations: Operation[]
  filename: string
}

async function getPatches(patchPath: string): Promise<Patch[]> {
  try {
    const files = await readdir(patchPath)

    return await Promise.all(
      files.sort().map(async (filename) => ({
        operations: await readJsonFile(joinPath(patchPath, filename)),
        filename,
      })),
    )
  } catch (error: unknown) {
    if (instanceOfNodeError(error, Error) && error.code === 'ENOENT') {
      return []
    }

    throw error
  }
}

export async function applyPatches(document: OpenAPIV3.Document, patchesPath: string) {
  const patches = await getPatches(patchesPath)

  if (patches.length > 0) {
    fjp.applyPatch(
      document,
      patches.flatMap((p) => p.operations),
      true,
      true,
    )
  }
}
