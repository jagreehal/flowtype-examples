const packageJson = require('./package.json');
module.exports = function(wallaby) {
  return {
    debug: true,
    files: ['examples/**/*.js*', '!examples/**/*.spec.js*'],
    tests: ['examples/**/*.spec.js'],
    env: { type: 'node' },
    compilers: { '**/*.js*': wallaby.compilers.babel() },
    testFramework: 'jest',
    setup: function(w) {
      wallaby.testFramework.configure({
        testRegex: 'examples/.*\\.spec\\.js$'
      });
    }
  };
};
