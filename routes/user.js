const router = require('koa-router')();
const userctrl = require('../controllers/UserController');

router.prefix = '/user';

router.get('/user', userctrl.getAllUserInfo);
module.exports = router;
