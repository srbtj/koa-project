const userService = require('../services/UserService');
class UserController {
  async getAllUserInfo (ctx, next) {
    const data = await userService.getAllUserService();
    console.log('user====>>>>', data);
    ctx.body = await ctx.render('user.html', {data});
  }
};

module.exports = new UserController();
