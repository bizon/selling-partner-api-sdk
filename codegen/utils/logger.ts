import winston from 'winston'
import chalk from 'chalk'

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
    const value = (info.packageName as string)
      .split('')
      .reduce((acc: number, string: string) => acc + string.codePointAt(0)!, 0)

    const color = colors[value % colors.length]

    return `${color(`@sp-api-sdk/${info.packageName}`)}: ${info.message}`
  }),
  transports: [new winston.transports.Console()],
})
