const Koa = require('koa');
// const path = require('path');
const static = require('koa-static');
const router = require('koa-router')();
const co = require('co');
const render = require('koa-swig');
const bodyParser = require('koa-bodyparser');
// const registerRouter = require('./routes');
const initCtrl = require('./controllers/initController'); // 引入路由
const errorHandler = require('./middleware/errorHandler'); // 错误处理中间件
const {logger, accessLogger} = require('./config/log4j-config'); // 引入日志文件
const config = require('./config'); // 引入配置文件
const app = new Koa();

// 加载日志中间件
app.use(accessLogger());
// 加载错误处理中间件
errorHandler(app, logger);

// 设置渲染模板
const tmpl = {
  root: config.viewDir, // 模板根路径;
  autoescape: true, // 自动编译转译字符;
  cache: false, // 缓存, false 每次·修改重新编译， true: 缓存 生产环境设置为true;
  ext: 'html' // 模板结尾
  // locals:
};
// 添加渲染函数, 在 Controller中 ctx.render 调用
app.context.render = co.wrap(render(Object.assign({}, tmpl, { writeBody: false })));
// app.use(async ctx => ctx.body = await ctx.render('index'));

// 加载静态资源
// console.log(__dirname);
app.use(static(config.staticDir));
// 解析请求体, 不加这个, post提交数据时  ctx.request.body = {}
app.use(bodyParser());
// 初始化路由信息
// app.use(registerRouter());
initCtrl.getAllRouters(app, router);

// 开启服务
app.listen(8888, function () {
  console.log('启动服务成功...');
});
// console.log(config.port);
// app.listen(3000, function () {
//   console.log('启动服务...');
// });
