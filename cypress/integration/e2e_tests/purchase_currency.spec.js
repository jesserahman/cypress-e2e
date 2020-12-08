import {loginPage} from '../../support/PageObjects/LoginPage'
import {payBillsPage} from '../../support/PageObjects/PageBillsPage'

describe('Purchase Currency', () => {
  before(function() {
    loginPage.loadPage()
    Cypress.Cookies.debug(true)
    cy.setCookie('JSESSIONID', '843CCF4F')
  })

  it('fills out Purchase Currency form and verifies success message', () => {
    let currencyAmount = 150;

    payBillsPage.loadPage()
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
