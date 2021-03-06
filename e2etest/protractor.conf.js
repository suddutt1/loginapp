//protractor.conf.js
exports.config = {

  allScriptsTimeout: 51000,

  specs: [
    '*-spec.js'
  ],

  capabilities: {
    'browserName': 'chrome'
  },

  baseUrl: 'http://localhost:8000/',

  framework: 'jasmine',
  onPrepare: function() {
    var JasmineConsoleReporter = require('jasmine-console-reporter');
	var reporter = new JasmineConsoleReporter({
		colors: 1,           // (0|false)|(1|true)|2 
		cleanStack: 1,       // (0|false)|(1|true)|2|3 
		verbosity: 4,        // (0|false)|1|2|(3|true)|4 
		listStyle: 'indent', // "flat"|"indent" 
		activity: false
	});
    jasmine.getEnv().addReporter(reporter);
	},

  jasmineNodeOpts: {
    defaultTimeoutInterval: 50000
  }

};