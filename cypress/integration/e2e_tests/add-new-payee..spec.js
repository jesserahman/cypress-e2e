import {loginPage} from '../../support/PageObjects/LoginPage'
import {payBillsPage} from '../../support/PageObjects/PageBillsPage'
import {accountSummaryPage} from '../../support/PageObjects/AccountSummaryPage'
import {navbar} from '../../support/Fragments/Navbar'

describe('Add new payee', () => {
  before(function() {
    loginPage.loadPage()
    loginPage.loginWithValidUsernameAndPassword();
    accountSummaryPage.getUrl().should('include', 'bank/account-summary.html')
  })

  it('add new payee and verify success message', () => {
    navbar.clickPayBillsTab()
    payBillsPage.clickAndNewPayeeButton()
    fillOutAndSubmitNewPayeeForm()
    payBillsPage.getSuccessAlert().should('contain.text', 'The new payee Payee User was successfully created.')
  })

  function fillOutAndSubmitNewPayeeForm(){
    payBillsPage.fillInPayeeName("Payee User")
    payBillsPage.fillInPayeeAddress("1234 Test Street")
    payBillsPage.fillInPayeeAccount("123456789")
    payBillsPage.fillInPayeeDetails("test details")
    payBillsPage.clickSave()
  }

})
