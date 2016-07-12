//protractor.conf.js
exports.config = {

  allScriptsTimeout: 51000,

  specs: [
    '*-bat-spec.js'
  ],
  multiCapabilities:[
  {
    'browserName': 'chrome',
	'name' : 'BAT Login Test -Chrome'
  },
  {
    'browserName': 'firefox',
	'name' : 'BAT Login Test Firefox'
  }
  ],
  sauceUser: 'rubdutt1',
  sauceKey: '4ee117d5-d6e0-44ed-bdf0-47b0a587824c',
  
  baseUrl: 'http://batobacco.mybluemix.net/',

  framework: 'jasmine',
  
  jasmineNodeOpts: {
    defaultTimeoutInterval: 50000
  }

};