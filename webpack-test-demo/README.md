# webpack

## webpack原理

## 优化

启动webpack, 根据配置文件entry字段配置的入口文件，解析出所有的导入语句，在递归解析。在遇到导入语句时，webpack会做两件事：

1. 找到对应的导入文件
2. 根据导入文件的后缀（如果省略了后缀，会有一个查找过程），使用相应的loader处理

上面两个过程可能会伴随着递归查找，这是一个耗时的过程，会影响构建速度。

## 构建优化

1. 缩小文件的查找范围
   1. 配置loader的时候，使用includes、exclueds、test尽可能的减少需要被loader处理的文件
   2. 指定第三方模块的加载位置，减少模块的查找过程。模块默认到./node_modules/下查找，找不到的话，会望上一级../node_modules查询，以此类推。但是一个项目中，依赖的文件往往都在当前项目的node_modules下，所以可以使用`resolve.modules`指定模块的加载位置
   ```
    resolve: {
        modules: [path.resolve(__dirname, node_modules)],
    },
   ``` 
   3. 指定第三方库的使用文件，像vue、react这类库，通常打包后会根据不同的模块规范生成不同的文件，在使用的时候又是一个查找的过程，所以，在用的时候，可以给这类库设置一个别名，指定当前项目使用那个文件，可以规避查找。
   ```
    resolve: {
        alias: {
            vue$: 'vue/dist/vue.runtime.esm.js',
            'react': path.resolve(__dirname, './node_modules/react/umd/react.production.min.js'
        }
    }
   ```
   4. 指定导入文件的后缀，或者减少文件后缀的查找次数，在webpack配置中，`resolve.extensions`默认配置了`[.js, .json]`查找后缀，所以说，如果导入语句是`require('./data')`, webpack会先查找`./data.js`文件，如果没找到，就好尝试查找`./data.json`文件，如果还是没找到，就会报错。所以在导入文件的时候，尽可能的带上后缀，或者配置`resolve.extensions`的时候，把出现频率最高的放在最前面，同时也要保持配置列表最小，不要把不可能出现的后缀名写进去
   5. 减少一些没用的解析，对于项目中没有用到模块化（没有使用import、require、define）的文件，可以排除在外，不需要经过webpack解析
   ```
    module: {
        noParse: [],
    }
   ```
2. 使用DllPlugin和DllReferencePlugin插件，将第三方库单独抽离，生成一个动态链接库，只要模块不升级，下次这些第三方库就不会重新编译
3. 使用HappyPack进行多进程（js单线程，想要发挥多核CPU的能力，只能用多进程）打包处理，处理完成后，通过进程间的通信API告诉主进程
   1. 需要主要两点
       1. 在loader配置中，所有的文件处理都交给happypack/loader去处理
        ```
        {
            // 把对 .css 文件的处理转交给 id 为 css 的 HappyPack 实例
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
            use: ['happypack/loader?id=css'],
            }),
        },
        ```
      1. 新增plugins, 去处理js/css不同资源文件
        ```
        new HappyPack({
            id: 'css',
            // 如何处理 .css 文件，用法和 Loader 配置中一样
            loaders: ['css-loader'],
        }),
        ```
4. 使用ParallelUglifyPlugin多进程使用Uglify压缩代码（需要转成AST处理，比较耗时）
5. 如果webpack配置了文件监听`watch: true`，默认是从入口文件出发，把依赖的所有的文件都加入监听列表，而大多数文件是不会变化的`node_modules`下的文件，这样是很占用内存的，所以需要排除
```
{
    watch: true,
    watchOPtions: {
        // 不监听的文件或文件夹，支持正则匹配
        // 默认为空
        ignored: /node_modules/,
        // 监听到变化发生后会等300ms再去执行动作，防止文件更新太快导致重新编译频率太高
        // 默认为 300ms
        aggregateTimeout: 300,
        // 判断文件是否发生变化是通过不停的去询问系统指定文件有没有变化实现的
        // 默认每隔1000毫秒询问一次
        poll: 1000
    }
}
```

* watchOptions.aggregateTimeout 值越大性能越好，因为这能降低重新构建的频率。
* watchOptions.poll 值越大越好，因为这能降低检查的频率。
但两种优化方法的后果是会让你感觉到监听模式的反应和灵敏度降低了。

## loader原理

## plugins原理

## [文件监听和自动刷新浏览器原理](http://webpack.wuhaolin.cn/4%E4%BC%98%E5%8C%96/4-5%E4%BD%BF%E7%94%A8%E8%87%AA%E5%8A%A8%E5%88%B7%E6%96%B0.html)

webpack记录下每个文件最后的编辑时间，通过轮训（通过poll配置轮训的时间间隔）的方式，去获取文件的最新的最后更新时间，如果发现时间不一致，就判定为文件发生了变化，当然不会立即告诉监听着，而是会先缓存起来，等待一段时间（通过aggregateTimeout配置等待时间）后，一次性告诉监听者，也就是告诉webpack-dev-server, devServer会告诉启动服务过程中注入页面的代理客户端该刷新页面了。

> webpack-dev-server实现刷新浏览器有两种方案

1. 给网页注入代理客户端，通过代理客户端刷新（默认，配置inline: true）
   1. 在启动服务的时候，dev-server会给网页注入代理客户端，打开页面的时候，会发现network会有一个socket请求，这是代理客户端请求跟dev-sevrer服务端建立连接，当webpack监听到文件变化后，告诉dev-server, 然后dev-server向代理客户端发送消息，去刷新页面（因为dev-server不知道一个页面依赖了那些Chunk, 所以会向所有chunk注入代理客户端，这会导致构建速度变慢）

2. 将网页放在iframe下，通过刷新iframe(inline: false, 速度更快)

> 也可以通过调用浏览器提供的接口刷新页面

## [热更新原理](http://webpack.wuhaolin.cn/4%E4%BC%98%E5%8C%96/4-6%E5%BC%80%E5%90%AF%E6%A8%A1%E5%9D%97%E7%83%AD%E6%9B%BF%E6%8D%A2.html)
