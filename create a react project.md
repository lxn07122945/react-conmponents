一、入门Webpack
参考文章:[《入门Webpack,看这篇就够了](https://www.jianshu.com/p/42e11515c10f)
耐心看完这篇非常有帮助

二、React+Webpack环境配置
参考文章:[《webpack+react项目初体验》](https://segmentfault.com/a/1190000008257732)
项目实战:[《webpack+react小项目](https://zhuanlan.zhihu.com/p/20522487?columnSlug=FrontendMagazine)
___

[TOC]
___

###一、项目构建
    npm init
    创建相关文件的存储文件夹和基础文件
    安装webpack  npm install webpack --save;npm install webpack-dev-server --save
    安装react依赖：
        1、react react-dom  styled-components
        2、安装babelES6编码：npm install babel-preset-es2015 babel-preset-react babel-preset-stage-0 babel-polyfill babel-core --save-dev  并配置babel预处理文件.babelrc
        3、安装样式处理less npm install less --save
        4、安装webpack的loader以及webpack插件
            `npm install babel-loader style-loader css-loader less-loader --save-dev`
            `npm install extract-text-webpack-plugin html-webpack-plugin --save-dev`
        5、webpack基础配置
        6、webpack打包配置
___
###二、react
    生命周期函数：
     旧的生命周期函数：
        componentsWillReceiveProps  
        componentShouldUpdate
        componentWillUpdate
        componentDidUpdate
        componentWillMount
        componentDidMount
    input 的ref属性
flux
redux
reducer
react-router
react-native
