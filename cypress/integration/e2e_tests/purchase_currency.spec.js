import LoginPage from '../../support/PageObjects/LoginPage'
import PayBillsPage from '../../support/PageObjects/PageBillsPage'
import AccountSummaryPage from '../../support/PageObjects/AccountSummaryPage'
import Navbar from '../../support/Fragments/Navbar'

describe('Add new payee', () => {
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
    let currencyAmount = 150;

    Navbar.clickPayBillsTab()
    PayBillsPage.clickPurchaseForeignCurrencyButton()
    PayBillsPage.selectCurrency('Eurozone (euro)')
    PayBillsPage.addCurrencyAmount(currencyAmount)
    PayBillsPage.selectUSDCurrency()
    PayBillsPage.clickCalculateCosts()
    PayBillsPage.verifyConversionAmount(currencyAmount)
    PayBillsPage.clickPurchase()
  })

  it('verifies the payment amount', () => {
    PayBillsPage.verifySuccessMessage()
  })

})
