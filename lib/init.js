
import {promisify} from 'util'
import figlet from 'figlet'
import clear from 'clear'
import chalk from 'chalk'

const log = content => console.log(chalk.green(content))
export default async name => {
    // 打印欢迎界面
    clear()
    log(figlet.textSync('cobyte welcome'))
}