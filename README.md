# loginapp
Example application with Angularjs with the following configuration setup.
Karma is used as unit testing tool. 
Protractor is used as end-to-end ( e2e) test. 
I have assumed chrome to be the browser.

#Following are the setup steps

```sh

  git clone https://github.com/suddutt1/loginapp.git loginapp
  cd loginapp
  npm install 
  bower install
  npm run update-webdriver
  
  
```
#Application file structure
/--app (Contains the application html/js file with unit test specs)
 |  |---bower_components ( To be filled up by bower install command)
 |	|---app.js ( Application js file containing ng-app definition)
 |	|---index.html( Application entry file)
 |	|---home ( Directory conatining the home module files)
 |	|	|--home.html(home page template)
 |	|	|--home.js ( Contains home page controller definition)
 |	|---login ( Directory conatining the login module files)
 |		|--login.html ( Login page template)
 |		|--login.js ( Login page controller)
 |		|--log.unit.spec.js ( Karma unit test specification file for testing  controllers written in login.js)
 |--node-modules ( Populated by npm install)		
 |--package.json ( application package dependencies and scripts definition)
 |--bower.json ( contains specification for bower installed components like angular,angluar-route etc)
 |--.bowerrc (Defines the location of bower component installation i.e. as a subdirectory under app directory. If not mentioned then bower install command will install it from the location from where it was executed. 
 
 
#Application dependency 
#Bower
Bower is used to manage the angular, angular-route and angular-mock dependencies. Refer to .bowerrc  file for the download location of the application dependencies mentioned in bower.json. It is set to app directory. 
#Karma
As mentioned above Karma is used for unit testing. For reporting the unit test results on the console karma-spec-reporter plug-in is used. Refer to the karma.conf.js for the setup configguration. In the configuration , you have to add all the angulr files in the files configuration and mention the pattern of the unit test specition files those will be executed. In this project any file matching the pattern *.unit.spec.js under any subdirectory of app will be treated as unit testing specification file. Currenly login module has a spec file.

  
#To run the application 

```sh
  npm run start
```
# To run the unit tests
  
```sh
  
  #npm run test
  
```
  #To run e2e test
  
```sh
  npm run e2e
```
  
  
  
