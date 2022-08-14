import chalk from 'chalk'
import winston from 'winston'

const colors = [
  chalk.redBright,
  chalk.greenBright,
  chalk.yellowBright,
  chalk.blueBright,
  chalk.magentaBright,
  chalk.cyanBright,
]

export const logger = winston.createLogger({
  format: winston.format.printf((info) => {
    const moduleName: string = info.packageName ?? info.notificationName ?? ''

    const value = [...moduleName].reduce(
      (acc: number, string: string) => acc + string.codePointAt(0)!,
      0,
    )

    const color = colors[value % colors.length]

    if (info.packageName) {
      return `${color(`@sp-api-sdk/${moduleName}`)}: ${info.message}`
    }

    if (info.notificationName) {
      return `${color(`@sp-api-sdk/notifications: ${moduleName}`)}: ${info.message}`
    }

    return `${color('@sp-api-sdk')}: ${info.message}`
  }),
  transports: [new winston.transports.Console()],
})
