const userService = require('../services/UserService');
class UserController {
  async getAllUserInfo (ctx, next) {
    const data = await userService.getAllUserService();
    ctx.body = await ctx.render('user.html', {data});
  }
  async addUserInfo (ctx, next) {
    const data = {
      title: '新增用户',
      type: 1,
      user: {}
    };
    ctx.body = await ctx.render('addOrEditUser.html', {data});
  }
  async updateUserInfo (ctx, next) {
    const id = ctx.params.id;
    // 查找用户信息
    const result = await userService.getUserInfoById(id);
    const data = {
      title: '编辑用户',
      type: 2,
      user: result[0]
    };
    ctx.body = await ctx.render('addOrEditUser.html', {data});
  }
  async saveOrUpdateUserInfo (ctx, next) {
    const user = ctx.request.body;
    await userService.saveOrUpdateUserInfo(user);
    ctx.redirect('/user');
  }
  async deleteUserInfo (ctx, next) {
    const id = ctx.params.id;
    await userService.deleteUserInfo(id);
    ctx.redirect('/user');
  }
};

module.exports = new UserController();
