"use strict";

System.register([], function (_export, _context) {
  "use strict";

  var User;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  return {
    setters: [],
    execute: function () {
      User =
      /*#__PURE__*/
      function () {
        function User() {
          _classCallCheck(this, User);
        }

        _createClass(User, [{
          key: "addUser",
          value: function addUser() {
            console.log('使用es6模块添加用户信息');
          }
        }]);

        return User;
      }();

      _export("default", User);
    }
  };
});
