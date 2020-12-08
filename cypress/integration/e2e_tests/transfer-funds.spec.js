import {loginPage} from '../../support/PageObjects/LoginPage'
import {transferFundsPage} from '../../support/PageObjects/TransferFundsPage'

describe('Test Transfer Funds', () => {
  before(function() {
    loginPage.loadPage()
    Cypress.Cookies.debug(true)
    cy.setCookie('JSESSIONID', '843CCF4F')
  })

  it('add new payee and verify success message', () => {
    let currencyAmount = 2500;
    let description = "test"

    transferFundsPage.loadPage()
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
