##Setup 
1. Navigate to the application root directory where package.json is present.
2. Run the following command in sequence
```sh
	npm install protractor --save-dev
	npm install jasmine-console-reporter --save-dev
	webdriver-manager update
```
3. Create a dirctory with name e2etest
4. Copy the file protractor-bat.conf.js and logintest-bat-spec.js under e2etest directoy
5. We are all set to go.

##Running the tests 
Run the following command the application root directory. 

The configuration file will test against the application hosted at http://batobacco.mybluemix.net. 
```sh
	protractor e2etest\protractor-bat.conf.js
```
If you want to run the application against the local deployment , then change the baseUrl attribute of 	e2etest\protractor-bat.conf.js file.

