'use strict';
let path = require('path');
let defaultSettings = require('./defaults');

// Additional npm or bower modules to include in builds
// Add all foreign plugins you may need into this array
// @example:
// let npmBase = path.join(__dirname, '../node_modules');
// let additionalPaths = [ path.join(npmBase, 'react-bootstrap') ];
let additionalPaths = [];

module.exports = {
  additionalPaths: additionalPaths,
  port: defaultSettings.port,
  debug: true,
  devtool: 'eval',
  output: {
    path: path.join(__dirname, '/../dist/assets'),
    filename: 'app.js',
    publicPath: defaultSettings.publicPath
  },
  devServer: {
    contentBase: './src/', //静态资源所在目录；并监听该文件夹下的文件 然后重新编译（热加载）
    historyApiFallback: true, // 配合react-router使用，用于处理不存在的路由
    hot: true, // 开启react热加载
    port: defaultSettings.port, // 测试开发服务的端口
    publicPath: defaultSettings.publicPath, // 静态资源引用时的地址
    noInfo: false // 控制台不输出info信息(只有warnings和errors)
  },

  // 文档：http://webpack.github.io/docs/configuration.html#resolve
  // 影响模块的处理
  resolve: {

    // 适用resolve的文件扩展名
    extensions: ['', '.js', '.jsx'],

    // 替换require模块时的路径
    alias: {
      actions: `${defaultSettings.srcPath}/actions/`,
      components: `${defaultSettings.srcPath}/components/`,
      sources: `${defaultSettings.srcPath}/sources/`,
      stores: `${defaultSettings.srcPath}/stores/`,
      styles: `${defaultSettings.srcPath}/styles/`,
      config: `${defaultSettings.srcPath}/config/` + process.env.REACT_WEBPACK_ENV
    }
  },
  module: {}
};
