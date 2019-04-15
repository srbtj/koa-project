const _ = require('lodash');
const {join} = require('path');
let config = {
  'viewDir': join(__dirname, '..', 'views'), // 渲染模板
  'staticDir': join(__dirname, '..', 'public') // 静态资源
};
// 获取当前的环境: 开发: development, 生产: production
const NODE_ENV = process.env.NODE_ENV;
if (NODE_ENV === 'development') {
  const devConfig = {
    port: 8888,
    baseUrl: 'http://localhost/book/web/index.php?r='
  }
  config = _.extend(config, devConfig);
}
if (NODE_ENV === 'production') {
  const prodConfig = {
    port: 80,
    baseUrl: ''
  };
  config = _.extend(config, prodConfig);
}

console.log(config);

module.exports = config;
