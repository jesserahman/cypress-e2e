import BasePage from './BasePage'

class FeedbackPage extends BasePage {

  // get web elements
  getPageTitle(){
    return cy.get('#feedback-title')
  }

  getNameField(){
    return cy.get('#name');
  }

  getEmailField(){
    return cy.get('#email');
  }

  getSubjectField(){
    return cy.get('#subject');
  }

  getCommentField(){
    return cy.get('#comment');
  }

  getSubmitButton(){
    return cy.get('input[type=submit]')
  }

  getFormSubmitMessage(){
    return cy.get('div.offset3.span6').contains('Thank you for your comments')
  }


  // actions
  loadPage(){
    cy.visit('http://zero.webappsecurity.com/feedback.html');
  }

  fillOutName(name){
    this.getNameField().clear().type(name)
  }

  fillOutEmail(email){
    this.getEmailField().clear().type(email)
  }

  fillOutSubject(subject){
    this.getSubjectField().clear().type(subject)
  }

  fillOutMessageBody(body){
    this.getCommentField().clear().type(body)
  }

  clickSubmitButton(){
    this.getSubmitButton().click()
  }

  // verifications

  verifyPageTitle(){
    this.getPageTitle().should('be.visible')
  }

}

export const feedbackPage = new FeedbackPage();
