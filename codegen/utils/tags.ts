import {type OpenAPIV3} from 'openapi-types'

export function replaceAllTags(document: OpenAPIV3.Document, clientNameBase: string) {
  for (const path of Object.values(document.paths)) {
    if (path) {
      for (const operation of Object.values(path)) {
        if (typeof operation !== 'object' || !('operationId' in operation)) {
          continue
        }

        operation.tags = [clientNameBase]
      }
    }
  }
}
