import {loginPage} from '../../support/PageObjects/LoginPage'
import {payBillsPage} from '../../support/PageObjects/PageBillsPage'

describe('Make Payment', () => {
  before(function() {
    loginPage.loadPage()
    Cypress.Cookies.debug(true)
    cy.setCookie('JSESSIONID', '843CCF4F')
  })

  it('should successfully make a payment', () => {
    payBillsPage.loadPage()

    cy.intercept('POST', '**/pay-bills-saved-payee.html').as('postPayment')

    fillOutAndSubmitPaymentForm()

    cy.wait('@postPayment').its('response.statusCode').should('equal', 200)
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
