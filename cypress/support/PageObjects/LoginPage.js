import BasePage from './BasePage'

class LoginPage extends BasePage {
  // Functions for getting web elements
  getForgotPasswordLink(){
    return cy.get('a').contains('Forgot your password ?');
  }

  getUserLoginInputField(){
    return cy.get('#user_login');
  }

  getPasswordInputField(){
    return cy.get('#user_password');
  }

  getSubmitFormButton(){
    return cy.get('input').contains('Sign in')
  }

  getAlertMessage(){
    return cy.get('.alert-error');
  }

  // Fuctions for page actions
  loadPage() {
    cy.visit('http://zero.webappsecurity.com/login.html')
  }

  clickForgotPasswordLink(){
    this.getForgotPasswordLink().click()
  }

  fillInUsername(username){
    this.getUserLoginInputField().clear().type(username, {delay: 100})
  }

  fillInPassword(password){
    this.getPasswordInputField().clear().type(password)
  }

  submitForm(){
    this.getSubmitFormButton().click()
  }

  verifyErrorMessage(){
    this.getAlertMessage().should('be.visible')
  }

  login(username, password){
    this.clearCookiesAndLocalStorage()
    this.fillInUsername(username)
    this.fillInPassword(password)
    this.submitForm()
  }

  loginWithValidUsernameAndPassword(){
    cy.fixture('user').then( (usr) => {
      this.login(usr.valid_username, usr.valid_password)
    })
  }
}

export const loginPage = new LoginPage();
