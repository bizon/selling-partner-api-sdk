import {type OpenAPIV3} from 'openapi-types'

function replacePathTags(path: OpenAPIV3.PathItemObject, clientNameBase: string) {
  for (const operation of Object.values(path)) {
    if (typeof operation !== 'object' || !('operationId' in operation)) {
      continue
    }

    operation.tags = [clientNameBase]
  }
}

export function replaceAllTags(document: OpenAPIV3.Document, clientNameBase: string) {
  for (const path of Object.values(document.paths)) {
    if (path) {
      replacePathTags(path, clientNameBase)
    }
  }
}
