#!/usr/bin/env node
// 指定脚本解析器类型

import program from 'commander'
program.version('1.0.0')
program.command('init <name>')
    .description('init project')
    .action(name => {
        console.log('init:', name)
    })
program.parse(process.argv)