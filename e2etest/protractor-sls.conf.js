//protractor.conf.js
exports.config = {

  allScriptsTimeout: 51000,

  specs: [
    '*-spec.js'
  ],

  capabilities: {
    'browserName': 'chrome',
	'name' : 'Login app test'
  },

  sauceUser: 'rubdutt1',
  sauceKey: '4ee117d5-d6e0-44ed-bdf0-47b0a587824c',
  
  baseUrl: 'http://localhost:8000/',

  framework: 'jasmine',
  

  jasmineNodeOpts: {
    defaultTimeoutInterval: 50000
  }

};