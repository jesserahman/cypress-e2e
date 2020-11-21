import BasePage from './BasePage'

class LoginPage extends BasePage {
  static clickForgotPasswordLink(){
    cy.get('a').contains('Forgot your password ?').click()
  }
}

export default LoginPage
