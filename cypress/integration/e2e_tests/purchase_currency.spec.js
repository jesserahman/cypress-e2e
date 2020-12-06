import {loginPage} from '../../support/PageObjects/LoginPage'
import {payBillsPage} from '../../support/PageObjects/PageBillsPage'
import {accountSummaryPage} from '../../support/PageObjects/AccountSummaryPage'
import {navbar} from '../../support/Fragments/Navbar'

describe('Purchase Currency', () => {
  before(function() {
    loginPage.loadPage()
    loginPage.loginWithValidUsernameAndPassword()
    accountSummaryPage.getUrl().should('include', 'bank/account-summary.html')
  })

  it('fills out Purchase Currency form and verifies success message', () => {
    let currencyAmount = 150;

    navbar.clickPayBillsTab()
    payBillsPage.clickPurchaseForeignCurrencyButton()
    fillOutAndSubmitPurchaseCurrencyForm(currencyAmount)
    payBillsPage.getSuccessMessage().should('contain.text',  'Foreign currency cash was successfully purchased.')
  })

  function fillOutAndSubmitPurchaseCurrencyForm(currencyAmount){
    payBillsPage.selectCurrency('Eurozone (euro)')
    payBillsPage.addCurrencyAmount(currencyAmount)
    payBillsPage.selectUSDCurrency()
    payBillsPage.clickCalculateCosts()
    payBillsPage.getConversionAmount().should('contain.text', `${currencyAmount}`)
    payBillsPage.clickPurchase()
  }
})
