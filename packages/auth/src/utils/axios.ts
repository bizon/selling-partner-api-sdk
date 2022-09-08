import globalAxios from 'axios'

import {packageJson} from './package'

export const axios = globalAxios.create({
  baseURL: 'https://api.amazon.com/auth/',
  headers: {
    'user-agent': `${packageJson.name}/${packageJson.version}`,
  },
})
