import {join as joinPath} from 'path'
import {readdir} from 'fs/promises'

import {applyPatch} from 'fast-json-patch'
import jsonfile from 'jsonfile'
import type {OpenAPIV3} from 'openapi-types'
import type {Operation} from 'fast-json-patch'

import {instanceOfNodeError} from './error'

interface Patch {
  operation: Operation;
  filename: string;
}

async function getPatches(patchPath: string): Promise<Patch[]> {
  try {
    const files = await readdir(patchPath)

    return await Promise.all(
      files.sort().map(async filename => ({
        operation: await jsonfile.readFile(joinPath(patchPath, filename)),
        filename,
      })),
    )
  } catch (error) {
    if (instanceOfNodeError(error, Error) && error.code === 'ENOENT') {
      return []
    }

    throw error
  }
}

export async function applyPatches(document: OpenAPIV3.Document, patchesPath: string) {
  const patches = await getPatches(patchesPath)

  applyPatch(document, patches.map(p => p.operation), true, true)

  return patches.length > 0
}
