const NEW_USER = {
  firstName: 'Taras',
  lastName: '27',
  tel: '+380988307827',
  email: Date.now() + '@test.com',
  password: 'tarasPassword'
}

Feature('register');

Scenario('click, feel, see',  ({ I, basePage, accountPage }) => {
  I.amOnPage('http://opencart.qatestlab.net/');  
  basePage.clickMyAccount();
  basePage.clickRegister();
  accountPage.verifyRegisterAccountPage();
  accountPage.fillNewUserForm(NEW_USER);
  accountPage.verifySuccessfullRegistration();
  //I.click({xpath: '//*[@id="top-links"]/ul/li/span/span'});
  //I.click({xpath: '//*[@id="top-links"]/ul/li/ul/li[1]/a'});
  //const registerTitlePage = 'Реєстрація';
  //I.seeTextEquals(registerTitlePage, {xpath: '//*[@id="content"]/h1'})
  //I.fillField({xpath: '//*[@id="input-firstname"]'}, 'Taras');
  //I.fillField({xpath: '//*[@id="input-lastname"]'}, 'Shulak');
  //I.fillField({xpath: '//*[@id="account"]/div[3]/div/input'}, 'ajax');
  //I.fillField({xpath: '//*[@id="input-email"]'},'tarashulak@gmail.com');
  //I.fillField({xpath: '//*[@id="input-telephone"]'}, '+380988307827');
  //I.fillField({xpath: '//*[@id="input-password"]'}, 'passwordTaras');
  //I.fillField({xpath: '//*[@id="input-confirm"]'}, 'passwordTaras')
  pause();
});
xScenario('grab', async ({ I }) => {
  I.amOnPage('http://opencart.qatestlab.net/index.php?route=product/product&path=20_264&product_id=29');
  const price = await I.grabTextFrom({xpath: '//*[@id="content"]/div[1]/div[2]/div/div[1]/span[1]'})
  console.log('price is ', price);
  I.waitForVisible({xpath: '//*[@id="product"]/div[1]/div/a[2]'}, 10);
  I.click({xpath: '//*[@id="product"]/div[1]/div/a[2]'})
  I.click({xpath: '//*[@id="product"]/div[1]/div/ul/li[4]'})
  I.waitForVisible({xpath: '//*[@id="product"]/div[2]/div/a[2]'}, 10)
  I.click({xpath: '//*[@id="product"]/div[2]/div/a[2]'})
  I.click({xpath: '//*[@id="product"]/div[2]/div/ul/li[2]'});  
});

