import {loginPage} from '../../support/PageObjects/LoginPage'
import {accountActivityPage} from '../../support/PageObjects/AccountActivityPage'

describe('View transactions for specific date range', () => {
  before(function() {
    loginPage.loadPage()
    Cypress.Cookies.debug(true)
    cy.setCookie('JSESSIONID', '843CCF4F')
  })

  it('should display a list of transactions in a specific date range', () => {
    let description = 'OFFICE SUPPLY';

    accountActivityPage.loadPage()
    accountActivityPage.clickFindTransactionsTab()
    fillOutAndSubmitTransactionsTabForm(description)
    accountActivityPage.getSearchResults()
      .should('contain.text' , '2012-09-05')
      .and('contain.text', description)
      .and('contain.text', '50')
    accountActivityPage.getNumberOfSearchResults().its('length').should('equal', 1)
  })

  function fillOutAndSubmitTransactionsTabForm(description){
    accountActivityPage.fillOutDescription(description)
    accountActivityPage.fillOutFromDate('2012-09-04')
    accountActivityPage.fillOutToDate('2012-09-06')
    accountActivityPage.fillOutFromAmount('0')
    accountActivityPage.fillOutToAmount('100')
    accountActivityPage.selectType('WITHDRAWAL')
    accountActivityPage.clickFindButton()
  }
})
