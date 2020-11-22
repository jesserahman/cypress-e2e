import BasePage from './BasePage'

class LoginPage extends BasePage {
  static loadPage() {
    cy.visit('http://zero.webappsecurity.com/login.html')
  }

  static clearCookiesAndLocalStorage(){
    return super.clearCookiesAndLocalStorage()
  }

  static clickForgotPasswordLink(){
    cy.get('a').contains('Forgot your password ?').click()
  }

  static fillInUsername(username){
    cy.get('#user_login').clear().type(username, {delay: 100})
  }

  static fillInPassword(password){
    cy.get("#user_password").clear().type(password)
  }

  static submitForm(){
    cy.get('input').contains('Sign in').click()
  }

  static verifyErrorMessage(){
    cy.get('.alert-error').should('be.visible')
  }

}

export default LoginPage
