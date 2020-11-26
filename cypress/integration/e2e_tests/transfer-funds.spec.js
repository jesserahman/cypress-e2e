import LoginPage from '../../support/PageObjects/LoginPage'
import TransferFundsPage from '../../support/PageObjects/TransferFundsPage'
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
    let currencyAmount = 2500;
    let description = "test"

    Navbar.clickTranferFundsTab()
    TransferFundsPage.selectFromAccount('6')
    TransferFundsPage.selectToAccount('2')
    TransferFundsPage.enterAmount(currencyAmount)
    TransferFundsPage.enterDescription(description)
    TransferFundsPage.clickContinue()
    TransferFundsPage.verifyDetails(currencyAmount, description)
    TransferFundsPage.clickContinue()
    TransferFundsPage.verifySuccessMessage()
  })

})
