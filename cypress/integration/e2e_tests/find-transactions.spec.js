import {loginPage} from '../../support/PageObjects/LoginPage'
import {accountActivityPage} from '../../support/PageObjects/AccountActivityPage'
import {accountSummaryPage} from '../../support/PageObjects/AccountSummaryPage'
import {navbar} from '../../support/Fragments/Navbar'

describe('View transactions for specific date range', () => {
  before(function() {
    loginPage.loadPage()
    loginPage.loginWithValidUsernameAndPassword()
    accountSummaryPage.getUrl().should('include', 'bank/account-summary.html')
  })

  it('should display a list of transactions in a specific date range', () => {
    let description = 'OFFICE SUPPLY';

    navbar.clickAccountActivityTab()
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
