var path = require('path')
var webpack = require('webpack')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    devtool: 'eval', //source-map
    entry: {
        main: './src/index.js'//入口文件
    },
    output: {
        path: path.join(__dirname, 'dist'),//出口文件
        filename: '[name].[hash:8].bundle.js'
    },
    resolve: {
        extensions: [' ', '.js', '.jsx', '.json', '.css', '.less']
    },
    module: {
        rules: [{
            test: /\.less$/,//加载less样式的loader
            use: ExtractTextPlugin.extract({
                fallback: "style-loader",
                use: ['css-loader', 'less-loader']
            })
        }, {
            test: /\.js?$/,//用于解析es6语法的babel-loader
            exclude: /node_modules/,
            use: 'babel-loader'
        }]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(), //热更新
        new webpack.NoEmitOnErrorsPlugin(), //错误不编译
        new ExtractTextPlugin('style.css'), //css模块独立
        new HtmlWebpackPlugin({
            title: 'Redux Practive', //标题
            // favicon: './src/assets/img/favicon.ico', //favicon路径
            filename: './index.html', //生成的html存放路径，相对于 path
            template: './src/index.html', //html模板路径
            inject: true, //允许插件修改哪些内容，包括head与body`
            minify: { //压缩HTML文件
                removeComments: true, //移除HTML中的注释
                collapseWhitespace: false //删除空白符与换行符
            }
        })
    ]
}
修改package.json
{
    "name": "init_react",
        "version": "1.0.0",
            "description": "",
                "main": "index.js",
                    "scripts": {
        "start": "webpack-dev-server --hot --inline --progress --colors --watch --compress --content-base ./dist  --port 8086 --host 0.0.0.0",
            "test": "echo \"Error: no test specified\" && exit 1"
    },
    "author": "",
        "license": "ISC",
            "dependencies": {
        "less": "^2.7.2",
            "react": "^15.6.1",
                "react-dom": "^15.6.1",
                    "webpack": "^3.3.0",
                        "webpack-dev-server": "^2.6.1"
    },
    "devDependencies": {
        "babel-core": "^6.25.0",
            "babel-loader": "^7.1.1",
                "babel-polyfill": "^6.23.0",
                    "babel-preset-es2015": "^6.24.1",
                        "babel-preset-react": "^6.24.1",
                            "babel-preset-stage-0": "^6.24.1",
                                "css-loader": "^0.28.4",
                                    "extract-text-webpack-plugin": "^3.0.0",
                                        "html-webpack-plugin": "^2.29.0",
                                            "less-loader": "^4.0.5",
                                                "style-loader": "^0.18.2"
    }
}