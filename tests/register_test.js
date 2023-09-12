const NEW_USER = {
  firstName: 'Taras',
  lastName: '27',
  tel: '+380988307827',
  email: Date.now() + '@test.com',
  password: 'tarasPassword'
}

Feature('register');

Scenario('register account',  ({ I, basePage, accountPage }) => {
  I.amOnPage('http://opencart.qatestlab.net/');  
  basePage.clickMyAccount();
  basePage.clickRegister();
  accountPage.verifyRegisterAccountPage();
  accountPage.fillNewUserForm(NEW_USER);
  accountPage.verifySuccessfullRegistration();
})

