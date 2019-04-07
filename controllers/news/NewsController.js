class NewsController {
  /**
   * 获取新闻列表
   * @param {*} ctx
   * @param {*} next
   */
  async newsList (ctx, next) {
    // TODO
    const data = [
      { title: 'koa-router模块化成功', content: '吼吼吼'}
    ]
    ctx.body = {
      data
    }
  }
};

module.exports = new NewsController();
