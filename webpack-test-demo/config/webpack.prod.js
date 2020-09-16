const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
    mode: 'production',
    // 两个文件合并成一个文件
    // entry: ['./src/index1.js', './src/index2.js'],
    // 生成两个文件。a.xxx.js b.xxx.js
    // entry: {
    //     a: './src/index1.js',
    //     b: './src/index2.js',
    // },
    watch: true,
    entry: './src/main.js',
    output: {
        // 开发环境Cannot use [chunkhash] or [contenthash] for chunk
        filename: 'static/[name].[hash].js',
        path: path.resolve(__dirname, 'dist'),
        // 生成静态资源的前缀 ./static/main.8c84b0525e5e8faf1451.js
        // 可以在这里设置CDN地址 
        publicPath: './',
    },
    // eval 每个模块代码都封装到eval中执行，bundle.js末尾追加注释指定source·的位置 sourceURL=webpack:///./node_modules/timers-browserify/main.js?");
    // source-map 生成一个source map文件，并在bundle.js的文件默认追加注释指定source的位置 # sourceMappingURL=main.2b9fa21be8ee78b52488.js.map
    // inline-source-map 将生成的source-map文件转换成base64追加到bundle.js文件末尾
    // hidden-source-map 跟source-map一样，但是在js文件末尾不会追加source的位置，浏览器也不会自动加载source
    // cheap-source-map 跟source-map一样，但是生成的source-map文件中没有列信息，速度更快，体积更小
    // cheap-module-source-map 跟cheap-source-map类似，但是会包含loader 生成的source-map

    /**
     *  可以随意组合
     *  eval：用 eval 语句包裹需要安装的模块；
        source-map：生成独立的 Source Map 文件；
        hidden：不在 JavaScript 文件中指出 Source Map 文件所在，这样浏览器就不会自动加载 Source Map；
        inline：把生成的 Source Map 转换成 base64 格式内嵌在 JavaScript 文件中；
        cheap：生成的 Source Map 中不会包含列信息，这样计算量更小，输出的 Source Map 文件更小；同时 Loader 输出的 Source Map 不会被采用；
        module：来自 Loader 的 Source Map 被简单处理成每行一个模块；

        开发环境，简单调试 可以使用 cheap-moudle-eval-source-map （使用eval包裹模块代码，速度快，体积小，没有行信息，最详细的source-map，同时包含了loader的source-map）
        生产环境需要source-map的情况下，使用hidden-source-map(生产了最详细的source，但不会暴露源码位置)
     */
    devtool: 'cheap-moudle-eval-source-map',
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
            vue$: 'vue/dist/vue.runtime.esm.js',
        },
    },
    // 配置不同文件的loader(翻译器)
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
            },
            {
                test: /\.css?$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                loader: 'url-loader',
                options: {
                    limit: 10240,
                    name: './static/[name].[contenthash].[ext]',
                    // 不设置在html中使用图片，会出现[Object Module]
                    esModule: false
                },
            },
            {
                test: /\.js$/,
                use: ['babel-loader'],
            },
        ],
    },
    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve('./public/index.html'),
            filename: 'index.html',
            inject: true,
        }),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('test'),
            },
        }),
    ],
}