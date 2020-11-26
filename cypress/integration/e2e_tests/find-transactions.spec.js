import LoginPage from '../../support/PageObjects/LoginPage'
import AccountActivityPage from '../../support/PageObjects/AccountActivityPage'
import AccountSummaryPage from '../../support/PageObjects/AccountSummaryPage'
import Navbar from '../../support/Fragments/Navbar'

describe('Test Transfer Funds', () => {
  before(function() {
    LoginPage.loadPage()
    cy.fixture('user').then( (usr) => {
      const username = usr.valid_username
      const password = usr.valid_password
      cy.login(username, password)
    })

    AccountSummaryPage.getUrl().should('include', 'bank/account-summary.html')
  })

  it('add new payee and verify success message', () => {
    let description = 'OFFICE SUPPLY';

    Navbar.clickAccountActivityTab()
    AccountActivityPage.clickFindTransactionsTab()
    AccountActivityPage.fillOutDescription(description)
    AccountActivityPage.fillOutFromDate('2012-09-04')
    AccountActivityPage.fillOutToDate('2012-09-06')
    AccountActivityPage.fillOutFromAmount('0')
    AccountActivityPage.fillOutToAmount('100')
    AccountActivityPage.selectType('WITHDRAWAL')
    AccountActivityPage.clickFindButton()
    AccountActivityPage.verifySearchResults(description)
  })

})
