import BasePage from './BasePage'

class AccountActivityPage extends BasePage {
  // load page
  loadPage(){
    cy.visit('http://zero.webappsecurity.com/bank/account-activity.html')
  }

  clickFindTransactionsTab(){
    cy.get('a').contains('Find Transactions').click()
  }

  fillOutDescription(text){
    cy.get('#aa_description').clear().type(text)
  }

  fillOutFromDate(date){
    cy.get('#aa_fromDate').clear().type(`${date} {enter}`)
  }

  fillOutToDate(date){
    cy.get('#aa_toDate').clear().type(`${date} {enter}`)
  }

  fillOutFromAmount(amount){
    cy.get('#aa_fromAmount').clear().type(amount)
  }

  fillOutToAmount(amount){
    cy.get('#aa_toAmount').clear().type(amount)
  }

  selectType(type){
    cy.get('#aa_type').select(type)
  }

  clickFindButton(){
    cy.wait(1000)
    cy.get('button[type=submit]').click()
  }

  getSearchResults(){
    return cy.get('td')
  }

  getNumberOfSearchResults(){
    return cy.get('#filtered_transactions_for_account table tbody tr')
  }
}

export const accountActivityPage = new AccountActivityPage()
