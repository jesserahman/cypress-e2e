import BasePage from './BasePage'

class ForgotPaswordPage extends BasePage {
  static verifyPageTitle(){
    cy.get('h3').contains('Forgotten Password').should('be.visible')
  }

  static sendForgotPasswordEmail(email){
    cy.get('#user_email').clear().type(email)
    cy.get('input[type=submit]').click()
  }

  static verifyForgotPasswordSentMessageForEmail(email){
    cy.get('div')
      .contains(`Your password will be sent to the following email: ${email}`)
      .should('be.visible')
  }
}

export default ForgotPaswordPage
