import {loginPage} from '../../support/PageObjects/LoginPage'
import {payBillsPage} from '../../support/PageObjects/PageBillsPage'
import {accountSummaryPage} from '../../support/PageObjects/AccountSummaryPage'
import {navbar} from '../../support/Fragments/Navbar'

describe('Add new payee', () => {
  before(function() {
    loginPage.loadPage()
    cy.fixture('user').then( (usr) => {
      loginPage.login(usr.valid_username, usr.valid_password)
    })

    accountSummaryPage.getUrl().should('include', 'bank/account-summary.html')
  })

  it('add new payee and verify success message', () => {
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
