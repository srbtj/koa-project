const bookctrl = require('./BookController');
const homectrl = require('./HomeController');
const newsctrl = require('./NewsController');
const userctrl = require('./UserController');

const initCtrls = {
  getAllRouters (app, router) {
    router
      // 首页
      .get('/', homectrl.homeList)
      // 用户路由
      .get('/user', userctrl.getAllUserInfo)
      .get('/addUser', userctrl.addUserInfo)
      .get('/editUser/:id', userctrl.updateUserInfo)
      .get('/delete/:id', userctrl.deleteUserInfo)
      .post('/saveUser', userctrl.saveOrUpdateUserInfo)
      // 新闻
      .get('/news', newsctrl.newsList)
      // 书籍
      .get('/book', bookctrl.bookList);

    app
      .use(router.routes())
      .use(router.allowedMethods());
  }
};

module.exports = initCtrls;
