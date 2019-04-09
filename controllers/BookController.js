class BookController {
  /**
   * 获取书籍列表信息
   * @param {*} ctx
   * @param {*} next
   */
  async bookList (ctx, next) {
    // TODO 调用后台接口获取数据
    const code = 100;
    const data = [
      { name: 'javaScript', author: 'tom', price: '99' },
      { name: 'node.js', author: 'jack', price: '98' },
      { name: 'react', author: 'lili', price: '99' }
    ];
    ctx.body = {
      code,
      data
    };
  }
}

module.exports = new BookController();
