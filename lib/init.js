
import {promisify} from 'util'
import figlet from 'figlet'
import clear from 'clear'
import chalk from 'chalk'
import download from './download.js'

const log = content => console.log(chalk.green(content))
export default async name => {
    // 打印欢迎界面
    clear()
    log(figlet.textSync('cobyte welcome'))

    // 下载空模版
    log(`🚀 创建 ${name}`)
    await download('github:amebyte/cli-vue-template', name)
}