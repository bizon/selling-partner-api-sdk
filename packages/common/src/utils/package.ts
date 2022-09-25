import {type NormalizedPackageJson, sync as readPackageJson} from 'read-pkg-up'

const result = readPackageJson()

export const packageJson: NormalizedPackageJson = result?.packageJson ?? {
  _id: '',
  readme: '',
  name: '@sp-api-sdk/common',
  version: 'unknown',
}
