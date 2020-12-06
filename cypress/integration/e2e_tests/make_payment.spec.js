import {loginPage} from '../../support/PageObjects/LoginPage'
import {payBillsPage} from '../../support/PageObjects/PageBillsPage'
import {accountSummaryPage} from '../../support/PageObjects/AccountSummaryPage'
import {navbar} from '../../support/Fragments/Navbar'

describe('Make Payment', () => {
  before(function() {
    loginPage.loadPage()
    loginPage.loginWithValidUsernameAndPassword()
    accountSummaryPage.getUrl().should('include', 'bank/account-summary.html')
  })

  it('should successfully make a payment', () => {
    navbar.clickPayBillsTab()
    fillOutAndSubmitPaymentForm()
    payBillsPage.getPaymentSuccess().should('contain.text', 'The payment was successfully submitted.')
  })

  function fillOutAndSubmitPaymentForm(){
    payBillsPage.selectPayeeFromDropdown('Apple')
    payBillsPage.selectAccountFromDropdown('Credit Card')
    payBillsPage.enterAmount("40")
    payBillsPage.enterDate('2020-3-10 {enter}')
    payBillsPage.enterDescription('test')
    payBillsPage.clickPay()
  }
})
