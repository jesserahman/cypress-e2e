import BasePage from './BasePage'

class TransferFundsPage extends BasePage {
  // load page
  loadPage(){
    cy.visit('http://zero.webappsecurity.com/bank/transfer-funds.html')
  }

  selectFromAccount(accountOption){
    cy.get('#tf_fromAccountId').select(`${accountOption}`)
  }

  selectToAccount(accountOption){
    cy.get('#tf_toAccountId').select(`${accountOption}`)
  }

  enterAmount(amount){
    cy.get('#tf_amount').clear().type(`${amount}`)
  }

  enterDescription(description){
    cy.get('#tf_description').clear().type(`${description}`)
  }

  clickContinue(){
    cy.get('#btn_submit').click()
  }

  verifyDetails(amount, description){
    cy.get('#tf_fromAccountId').should('contain.value', 'Brokerage')
    cy.get('#tf_toAccountId').should('have.value', 'Checking')
    cy.get('#tf_amount').should('have.value', `${amount}`)
    cy.get('#tf_description').should('contain.value', `${description}`)
  }

  verifySuccessMessage(){
    cy.get('.alert-success').should('contain.text', 'You successfully submitted your transaction.')
  }

}

export const transferFundsPage = new TransferFundsPage();
