# node-cli-study
node cli工具实现



先初始化

```
npm ini -y
```

然后新建目录bin，在bin目录下新建一个index.js文件，这个文件到时是作为一个shell文件进行执行的，需要在文件开头加一行：

```
#!/usr/bin/env node
```

这段代码的意思是指定脚本解析器类型，本来shell环境只能执行B-shell文件，如果要执行JavaScript文件则需要指定解析器为node。

配置package.json文件

```javascript
{
  "bin": {
    "cobyte": "./bin/cobyte.js"
  },
}
```

这个配置的意思是说，这个指令名称是`cobyte` 运行之后执行的是`"./bin/cobyte.js"` 这个目录的代码