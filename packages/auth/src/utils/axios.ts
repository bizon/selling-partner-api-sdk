import globalAxios from 'axios'

import {packageJson} from './package'

export const axios = globalAxios.create({
  baseURL: 'https://api.amazon.com/auth/',
  timeout: 30_000,
  headers: {
    'user-agent': `${packageJson.name}/${packageJson.version}`,
  },
})
