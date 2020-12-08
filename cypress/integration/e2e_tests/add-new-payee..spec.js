import {loginPage} from '../../support/PageObjects/LoginPage'
import {payBillsPage} from '../../support/PageObjects/PageBillsPage'

describe('Add new payee', () => {
  before(function() {
    loginPage.loadPage()
    Cypress.Cookies.debug(true)
    cy.setCookie('JSESSIONID', '843CCF4F')
  })

  it('add new payee and verify success message', () => {
    payBillsPage.loadPage()
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
