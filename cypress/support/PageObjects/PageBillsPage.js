import BasePage from './BasePage'

class PayBillPage extends BasePage {
  // click functions
  clickAndNewPayeeButton() {
    cy.get('a').contains('Add New Payee').click()
  }

  clickPurchaseForeignCurrencyButton() {
    cy.get('a').contains('Purchase Foreign Currency').click()
  }

  clickSave(){
    cy.get('input[type=submit]').contains('Add').click()
  }

  clickPay(){
    cy.get('input[type=submit]').contains('Pay').click()
  }

  clickCalculateCosts(){
    cy.get('#pc_calculate_costs').click()
  }

  clickPurchase(){
    cy.get('input[type=submit]').contains('Purchase').click()
  }

  // select functions
  selectPayeeFromDropdown(value){
    cy.get('#sp_payee').select(`${value}`)
  }

  selectAccountFromDropdown(value){
    cy.get('#sp_account').select(`${value}`)
  }

  selectUSDCurrency(){
    cy.get('#pc_inDollars_true').click()
  }

  selectCurrency(value){
    cy.get('#pc_currency').select(`${value}`)
  }

  // fill functions
  fillInPayeeName(name){
    cy.get('#np_new_payee_name').clear().type(name)
  }

  fillInPayeeAddress(address){
    cy.get('#np_new_payee_address').clear().type(address)
  }

  fillInPayeeAccount(account){
    cy.get('#np_new_payee_account').clear().type(account)
  }

  fillInPayeeDetails(details){
    cy.get('#np_new_payee_details').clear().type(details)
  }


  // enter functions
  enterAmount(value){
    cy.get('#sp_amount').clear().type(`${value}`)
  }

  enterDate(date){
    cy.get('#sp_date').clear().type(date)
  }

  enterDescription(description){
    cy.get('#sp_description').clear().type(`${description} {enter} `)
  }


  // other functions


  addCurrencyAmount(value){
    cy.get('#pc_amount').clear().type(`${value}`)
  }

  getConversionAmount(){
    return cy.get('#pc_conversion_amount');
  }

  getSuccessMessage(){
    return cy.get('#alert_content')
  }

  getAndVerifySuccessAlert(){
    cy.get('#alert_content').should('contain.text', 'The new payee Payee User was successfully created.')
  }

  verifyPaymentSuccess(){
    cy.get('#alert_content').should('contain.text', 'The payment was successfully submitted.')
  }

}

export const payBillsPage = new PayBillPage();
