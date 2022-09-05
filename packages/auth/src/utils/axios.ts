import globalAxios from 'axios'

import {packageJson} from './package'

export const axios = globalAxios.create({
  headers: {
    'user-agent': `${packageJson.name}/${packageJson.version}`,
  },
})
