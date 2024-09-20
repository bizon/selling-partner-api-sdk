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
    const moduleName: string = info.packageName ?? info.schemaName ?? ''

    const value = [...moduleName].reduce(
      (accumulator: number, string: string) => accumulator + string.codePointAt(0)!,
      0,
    )

    const color = colors[value % colors.length]

    if (info.packageName) {
      return `${color(`@sp-api-sdk/${moduleName}`)}: ${info.message}`
    }

    if (info.schemaType) {
      return `${color(`@sp-api-sdk/schemas: ${chalk.bold(info.schemaType)}(${moduleName})`)}: ${info.message}`
    }

    return `${color('@sp-api-sdk')}: ${info.message}`
  }),
  transports: [new winston.transports.Console()],
})
