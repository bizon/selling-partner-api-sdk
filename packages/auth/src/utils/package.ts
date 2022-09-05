import {type NormalizedPackageJson, sync as readPackageJson} from 'read-pkg-up'

const result = readPackageJson()!

export const packageJson: NormalizedPackageJson = result.packageJson
