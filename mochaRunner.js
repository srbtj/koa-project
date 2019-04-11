const Mocha = require('mocha');
const path = require('path');
const mocha = new Mocha({
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: path.join(__dirname, 'doc/mochaReport'),
    reportFilename: 'reportFile',
    quiet: false
  }
});

mocha.addFile(path.join(__dirname, 'test/e2e/user.spec.js'));
mocha.run(function () {
  process.exit();
});
