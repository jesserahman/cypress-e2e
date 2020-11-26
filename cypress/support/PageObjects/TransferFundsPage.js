import BasePage from './BasePage'

class TransferFundsPage extends BasePage {
  static selectFromAccount(accountOption){
    cy.get('#tf_fromAccountId').select(`${accountOption}`)
  }

  static selectToAccount(accountOption){
    cy.get('#tf_toAccountId').select(`${accountOption}`)
  }

  static enterAmount(amount){
    cy.get('#tf_amount').clear().type(`${amount}`)
  }

  static enterDescription(description){
    cy.get('#tf_description').clear().type(`${description}`)
  }

  static clickContinue(){
    cy.get('#btn_submit').click()
  }

  static verifyDetails(amount, description){
    cy.get('#tf_fromAccountId').should('contain.value', 'Brokerage')
    cy.get('#tf_toAccountId').should('have.value', 'Checking')
    cy.get('#tf_amount').should('have.value', `${amount}`)
    cy.get('#tf_description').should('contain.value', `${description}`)
  }

  static verifySuccessMessage(){
    cy.get('.alert-success').should('contain.text', 'You successfully submitted your transaction.')
  }



}

export default TransferFundsPage
