class HomeController {
  async homeList (ctx, next) {
    const data = {
      title: '首页',
      content: '首页内容，服务端沉浸得来的'
    };
    ctx.body = await ctx.render('index.html', { data });
  }
};

module.exports = new HomeController();
