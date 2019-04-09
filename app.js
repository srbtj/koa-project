const Koa = require('koa');
const path = require('path');
const static = require('koa-static');
const registerRouter = require('./routes');
const render = require('koa-swig');
const co = require('co');
const app = new Koa();
const {logger, accessLogger} = require('./utils/log4j-config');

// 设置模板
const tmpl = {
  root: path.join(__dirname, './views'), // 模板根路径;
  autoescape: true, // 自动编译转译字符;
  cache: false, // 缓存, false 每次修改重新编译， true: 缓存 生产环境设置为true;
  ext: 'html' // 模板结尾
  // locals:
};
// 设置渲染模板
app.context.render = co.wrap(render(Object.assign({}, tmpl, { writeBody: false })));
// app.use(async ctx => ctx.body = await ctx.render('index'));

// 加载静态资源
// console.log(__dirname);
app.use(static(path.join(__dirname, './public')));

app.use(registerRouter());
// 加载日志中间件
app.use(accessLogger());
// 开启服务
app.listen(8080, function () {
  console.log('启动服务成功...');
});
