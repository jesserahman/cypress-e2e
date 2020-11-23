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
    Navbar.clickPayBillsTab()
    PayBillsPage.clickAndNewPayeeButton()
    PayBillsPage.fillInPayeeName("Payee User")
    PayBillsPage.fillInPayeeAddress("1234 Test Street")
    PayBillsPage.fillInPayeeAccount("123456789")
    PayBillsPage.fillInPayeeDetails("test details")
    PayBillsPage.clickSave()
    PayBillsPage.getAndVerifySuccessAlert()
  })

})
