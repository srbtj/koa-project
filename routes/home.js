const router = require('koa-router')();
const homectrl = require('../controllers/HomeController');
// router.prefix('/');
// router.get('/', async (ctx, next) => {
//   ctx.body = 'index page ...';
// });
router.get('/', homectrl.homeList);

module.exports = router;
