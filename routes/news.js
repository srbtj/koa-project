const Router = require('koa-router');
const router = new Router();
const newsctrl = require('../controllers/NewsController');
router.prefix = '/news'
// router.get('/news', async ctx => {
//   ctx.body = 'news pages';
// });
router.get('/news', newsctrl.newsList);
module.exports = router;
