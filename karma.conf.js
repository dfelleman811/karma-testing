// Karma configuration
// Generated on Wed May 31 2023 16:12:15 GMT-0400 (Eastern Daylight Time)

module.exports = function(config) {
  config.set({
    basePath: './',
    // frameworks to use
    // available frameworks: https://www.npmjs.com/search?q=keywords:karma-adapter
    frameworks: ['jasmine'],
    plugins: ['karma-jasmine','karma-chrome-launcher'],


    // list of files / patterns to load in the browser
    files: [
      '**/*.js',
      '**/*.spec.js'
    ],

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://www.npmjs.com/search?q=keywords:karma-reporter
    reporters: ['progress', 'dots'],
    browsers: ['Chrome'],
    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_DEBUG,

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true,
    browserNoActivityTimeout: 60000

  })
}
