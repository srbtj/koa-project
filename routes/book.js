const router = require('koa-router')();
const bookctrl = require('../controllers/book/BookController');
router.prefix = '/book'
// router.get('/book', async (ctx) => {
//   ctx.body = 'book pages';
// });
router.get('/book', bookctrl.bookList);

module.exports = router;
