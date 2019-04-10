const router = require('koa-router')();
const userctrl = require('../controllers/UserController');

router.prefix = '/user';

router
  .get('/user', userctrl.getAllUserInfo)
  .get('/addUser', userctrl.addUserInfo)
  .get('/editUser/:id', userctrl.updateUserInfo)
  .get('/delete/:id', userctrl.deleteUserInfo)
  .post('/saveUser', userctrl.saveOrUpdateUserInfo);
module.exports = router;
