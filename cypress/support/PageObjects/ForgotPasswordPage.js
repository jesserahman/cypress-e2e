import BasePage from './BasePage'

class ForgotPasswordPage extends BasePage {
  getPageTitle(){
    return cy.get('h3').contains('Forgotten Password')
  }

  getForgotPasswordSentMessageForEmail(email){
    return cy.get('div')
      .contains(`Your password will be sent to the following email: ${email}`)
  }

  sendForgotPasswordEmail(email){
    cy.get('#user_email').clear().type(email)
    cy.get('input[type=submit]').click()
  }
}

export const forgotPasswordPage = new ForgotPasswordPage();
