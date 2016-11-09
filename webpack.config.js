/**
 * 读取命令行设置的环境变量，然后读取不同环境的配置文件
 * 配置文件在根目录的cfg文件夹下
 */

'use strict';

const path = require('path');
const args = require('minimist')(process.argv.slice(2)); //文档: https://github.com/substack/minimist

// 允许的环境列表
const allowedEnvs = ['dev', 'dist', 'test'];

// 设置当前的环境
let env;
if (args._.length > 0 && args._.indexOf('start') !== -1) {
  env = 'test';
} else if (args.env) {
  env = args.env;
} else {
  env = 'dev';
}
process.env.REACT_WEBPACK_ENV = env;

/**
 * 构建webpack配置参数
 * @param  {String} wantedEnv 环境变量
 * @return {Object} Webpack配置
 */
function buildConfig(wantedEnv) {
  let isValid = wantedEnv && wantedEnv.length > 0 && allowedEnvs.indexOf(wantedEnv) !== -1;
  let validEnv = isValid ? wantedEnv : 'dev';
  let config = require(path.join(__dirname, 'cfg/' + validEnv));
  return config;
}

module.exports = buildConfig(env);
