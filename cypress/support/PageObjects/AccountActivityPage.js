import BasePage from './BasePage'

class AccountActivityPage extends BasePage {
  static getUrl(){
    return super.getUrl()
  }

  static clickFindTransactionsTab(){
    cy.get('a').contains('Find Transactions').click()
  }

  static fillOutDescription(text){
    cy.get('#aa_description').clear().type(text)
  }

  static fillOutFromDate(date){
    cy.get('#aa_fromDate').clear().type(`${date} {enter}`)
  }

  static fillOutToDate(date){
    cy.get('#aa_toDate').clear().type(`${date} {enter}`)
  }

  static fillOutFromAmount(amount){
    cy.get('#aa_fromAmount').clear().type(amount)
  }

  static fillOutToAmount(amount){
    cy.get('#aa_toAmount').clear().type(amount)
  }

  static selectType(type){
    cy.get('#aa_type').select(type)
  }

  static clickFindButton(){
    cy.get('button[type=submit]').click()
  }

  static verifySearchResults(description){
    cy.get('td').should('contain.text' , '2012-09-05')
    cy.get('td').should('contain.text', description)
    cy.get('td').should('contain.text', '50')
    cy.get('#filtered_transactions_for_account table tbody tr').its('length').should('equal', 1)
  }

}

export default AccountActivityPage
