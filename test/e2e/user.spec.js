const expect = require('chai').expect;
const userModel = require('../../modules/UserModel');

describe('获取所有用户信息', function () {
  describe('调用获取所有用户接口: getAllUserInfo()', function () {
    it('has no data without error', function (done) {
      userModel.getAllUserInfo().then(res => {
        // console.log(res.length);
        expect(res).to.be.an('array');
        done();
      }).catch (err => {
        done(err);
      });
    });
  });
});
