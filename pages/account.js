const { I } = inject();

module.exports = {
  h1: {xpath: '//*[@id="content"]/h1'},
  firstNameField: {xpath: '//*[@id="input-firstname"]'},
  lastNameField: {xpath: '//*[@id="input-lastname"]'},
  emailField: {xpath: '//*[@id="input-email"]'},
  telField: {xpath: '//*[@id="input-telephone"]'},
  passwordField: {xpath: '//*[@id="input-password"]'},
  confirmField: {xpath: '//*[@id="input-confirm"]'},
  agree: {xpath: '//*[@id="content"]/form/div/div/input[1]'},
  continue: {xpath: '//*[@id="content"]/form/div/div/input[2]'},

  verifyRegisterAccountPage() {
      const registerTitleText = 'Реєстрація';
      I.seeTextEquals(registerTitleText, this.h1)  
    },
  
  fillNewUserForm(user){
    I.fillField(this.firstNameField, user.firstName);
    I.fillField(this.lastNameField, user.lastName);
    I.fillField(this.emailField, user.email);
    I.fillField(this.telField, user.tel);
    I.fillField(this.passwordField, user.password);
    I.fillField(this.confirmField, user.password);
    I.click(this.agree);
    I.click(this.continue);
    },

    verifySuccessfullRegistration() {
      const registerTitleText = 'Ваш обліковий запис створено!';
      I.seeTextEquals(registerTitleText, this.h1);     
    }
}
