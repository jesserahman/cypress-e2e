import BasePage from './BasePage'

class FeedbackPage extends BasePage {
  static veryPageTitle(){
    cy.get('#feedback-title').should('be.visible')
  }

  static fillOutName(name){
    cy.get('#name').clear().type(name)
  }

  static fillOutEmail(email){
    cy.get('#email').clear().type(email)
  }

  static fillOutSubject(subject){
    cy.get('#subject').clear().type(subject)
  }

  static fillOutMessageBody(body){
    cy.get('#comment').clear().type(body)
  }

  static submitFormAndVerifySubmission(){
    cy.get('input[type=submit]').click()
    cy.get('div.offset3.span6')
      .contains('Thank you for your comments')
      .should('be.visible')
  }
}

export default FeedbackPage
