
import {promisify} from 'util'
import figlet from 'figlet'
import clear from 'clear'
import chalk from 'chalk'
import { spawn } from 'child_process'
import download from './download.js'

const log = content => console.log(chalk.green(content))

const spawnPromise = async (...args) => {
    return new Promise(resolve => {
        const child = spawn(...args)

        // 输出流
        child.stdout.pipe(process.stdout)
        child.stderr.pipe(process.stderr)
        child.on('close', () => {
            resolve()
        })
    })
}

export default async name => {
    // 打印欢迎界面
    clear()
    log(figlet.textSync('cobyte welcome'))

    // 下载空模版
    log(`🚀 创建 ${name}`)
    await download('github:amebyte/cli-vue-template', name)
    
    // 安装依赖
    // npm install
    // 子进程
    log('🚲安装依赖 ...')
    await spawnPromise(process.platform === "win32" ? "npm.cmd" : "npm", ['install'], {cwd: `./${name}`})
    log(`
    👌安装完成：
    To get Start:
    ===========================
        cd ${name}
        npm run serve
    ===========================
                `);
}