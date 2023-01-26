import {readdir} from 'fs/promises'
import {join as joinPath} from 'path'

import {applyPatch} from 'fast-json-patch'
import type {Operation} from 'fast-json-patch'
import jsonfile from 'jsonfile'
import type {OpenAPIV3} from 'openapi-types'

import {instanceOfNodeError} from './error'

interface Patch {
  operations: Operation[]
  filename: string
}

async function getPatches(patchPath: string): Promise<Patch[]> {
  try {
    const files = await readdir(patchPath)

    return await Promise.all(
      files.sort().map(async (filename) => ({
        operations: await jsonfile.readFile(joinPath(patchPath, filename)),
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
    applyPatch(
      document,
      patches.flatMap((p) => p.operations),
      true,
      true,
    )
  }
}
