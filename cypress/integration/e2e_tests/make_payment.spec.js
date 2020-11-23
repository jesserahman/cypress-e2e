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
    const date = new Date(2020, 3, 10).getTime();

    Navbar.clickPayBillsTab()
    PayBillsPage.selectPayeeFromDropdown('Apple')
    PayBillsPage.selectAccountFromDropdown('Credit Card')
    PayBillsPage.enterAmount("40")
    PayBillsPage.enterDate('2020-3-10')
    PayBillsPage.clickOutOfCalendar()
    PayBillsPage.enterDescription('test')
    PayBillsPage.clickPay()
    PayBillsPage.verifyPaymentSuccess()
  })

})
