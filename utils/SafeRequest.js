const config = require('../config/index');
class SafeRequest {
  constructor (url) {
    this.url = url;
    this.baseUrl = config.baseUrl;
  }
  fetch (options) {
    const urls = this.baseUrl + this.url;
  }
}

module.exports = new SafeRequest();
