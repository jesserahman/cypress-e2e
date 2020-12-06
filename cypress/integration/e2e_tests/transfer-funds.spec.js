import {loginPage} from '../../support/PageObjects/LoginPage'
import {transferFundsPage} from '../../support/PageObjects/TransferFundsPage'
import {accountSummaryPage} from '../../support/PageObjects/AccountSummaryPage'
import {navbar} from '../../support/Fragments/Navbar'

describe('Test Transfer Funds', () => {
  before(function() {
    loginPage.loadPage()
    loginPage.loginWithValidUsernameAndPassword()
    accountSummaryPage.getUrl().should('include', 'bank/account-summary.html')
  })

  it('add new payee and verify success message', () => {
    let currencyAmount = 2500;
    let description = "test"

    navbar.clickTranferFundsTab()
    fillOutTransferFundsPageForm(currencyAmount, description)
    transferFundsPage.verifySuccessMessage()
  })

  function fillOutTransferFundsPageForm(currencyAmount, description){
    transferFundsPage.selectFromAccount('6')
    transferFundsPage.selectToAccount('2')
    transferFundsPage.enterAmount(currencyAmount)
    transferFundsPage.enterDescription(description)
    transferFundsPage.clickContinue()
    transferFundsPage.verifyDetails(currencyAmount, description)
    transferFundsPage.clickContinue()
  }
})
