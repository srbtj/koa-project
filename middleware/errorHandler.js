const CONS = require('../constants/index'); // 加载常量
/**
 * 错误处理中单件
 * @param {koa实例} app
 * @param {处理应用程序日志} logger
 */
const errorHandler = (app, logger) => {
  // 处理500
  app.use(async (ctx, next) => {
    try {
      await next();
    } catch (err) {
      // 记录错误日志
      logger.error(err);
      ctx.body = await ctx.render('500.html');
    }
  });
  // 处理404
  app.use(async (ctx, next) => {
    await next();
    const status = ctx.status;
    if (CONS.STATUS_404 !== status) return;
    console.log(ctx.status);
    /**
     * 人为的修改请求状态： 将 404 -> 200
     * 目的: 百度在做竞价排名时，如果发现访问的页面出现404或者500时，会降低排名，如果出的多的情况下，会搜索不到，
     * 所以，在页面出错或服务器出错时，将状态改成200;
     */
    ctx.status = CONS.STATUS_200;
    ctx.body = await ctx.render('404.html');
  });
}

module.exports = errorHandler;
