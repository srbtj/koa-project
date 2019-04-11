// Karma configuration
// Generated on Thu Apr 11 2019 16:51:05 GMT+0800 (GMT+08:00)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    // 根路径
    basePath: '../../',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['mocha', 'chai'],


    // list of files / patterns to load in the browser
    files: [ // 配置源文件与测试文件，配置出现
      'controllers/**/*.js',
      'test/unit/**/*.spec.js'
    ],


    // list of files / patterns to exclude
    exclude: [],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: { // 对哪些文件进行覆盖率的检查
      'test/unit/**/*.js': ['coverage']
    },
    // 设置生成的报表
    coverageReporter: {
      type: 'html',
      dir: 'doc/'
    },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress', 'coverage'], // 报表: 默认 progress (进行条), coverage: 覆盖率


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true, // 指定无头浏览器时，设置值为true， 否则 false

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}
