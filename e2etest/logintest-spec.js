//logintest-spec.js
'use strict';

describe('Trivial angular app',function(){
	it('Should load the login page of the Trivial angular app',function(){
		browser.get('index.html');
		expect(browser.getTitle()).toEqual('Trivial Angular App');
		expect(browser.getLocationAbsUrl()).toBe('/login');
	});
	describe('Login page should have the appropriate controlrs',function(){
		var loginBtn = element(by.id('btnLogin'));
		var uidBox = element(by.id('uid'));
		var pwdBox = element(by.id('pwd'));
		
		it('Login page should be having correct header = Trivial Angular App Login page',function(){
			expect(element(by.id('pageHeading')).getText(),'Trivial Angular App Login page');
		});
		it('Login page should have a text box for user id input',function(){
			expect(uidBox.isPresent()).toBe(true);
		});
		it('Login page should have a text box for entering password',function(){
			expect(pwdBox.isPresent()).toBe(true);
		});
		it('Login page should have a login button',function(){
			
			expect(loginBtn.isPresent()).toBe(true);
			expect(loginBtn.getText()).toEqual('Login');
		});
		
		
		
	});
	describe('Login button should work as expected',function(){
	var loginBtn = element(by.id('btnLogin'));
		var uidBox = element(by.id('uid'));
		var pwdBox = element(by.id('pwd'));
		it('Login button is pressed without entering any thing, should show error message',function(){
			loginBtn.click();
			expect(element(by.id('pageMessge')).getText()).toEqual('Please enter uid/pwd');
		});
	
		it('Login button is pressed with a valid user id but invalid password , should show error message',function(){
			uidBox.sendKeys('Sudip');
			pwdBox.sendKeys('abcd');
			loginBtn.click();
			expect(element(by.id('pageMessge')).getText()).toEqual('Enter correct uid/pwd');
		});
		it('Login button is pressed with a valid user id and password should load the home page',function(){
			var uidToEnter = 'Sudip';
			uidBox.clear();
			pwdBox.clear();
			
			uidBox.sendKeys(uidToEnter);
			pwdBox.sendKeys('zaqwsx');
			loginBtn.click();
			//We should be navigated to Home page
			expect(browser.getLocationAbsUrl()).toBe('/home/'+uidToEnter);
			expect(element(by.id('pageMessage')).getText()).toEqual('Welcome '+uidToEnter);
		});
	
	});
});