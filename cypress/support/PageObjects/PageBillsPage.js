import BasePage from './BasePage'

class PayBillPage extends BasePage {
  static clickAndNewPayeeButton() {
    cy.get('a').contains('Add New Payee').click()
  }

  static clickPurchaseForeignCurrencyButton() {
    cy.get('a').contains('Purchase Foreign Currency').click()
  }

  static fillInPayeeName(name){
    cy.get('#np_new_payee_name').clear().type(name)
  }

  static fillInPayeeAddress(address){
    cy.get('#np_new_payee_address').clear().type(address)
  }

  static fillInPayeeAccount(account){
    cy.get('#np_new_payee_account').clear().type(account)
  }

  static fillInPayeeDetails(details){
    cy.get('#np_new_payee_details').clear().type(details)
  }

  static clickSave(){
    cy.get('input[type=submit]').contains('Add').click()
  }

  static getAndVerifySuccessAlert(){
    cy.get('#alert_content').should('contain.text', 'The new payee Payee User was successfully created.')
  }

  static selectPayeeFromDropdown(value){
    cy.get('#sp_payee').select(`${value}`)
  }

  static selectAccountFromDropdown(value){
    cy.get('#sp_account').select(`${value}`)
  }

  static enterAmount(value){
    cy.get('#sp_amount').clear().type(`${value}`)
  }

  static enterDate(date){
    cy.get('#sp_date').clear().type(date)
  }

  static enterDescription(description){
    cy.get('#sp_description').clear().type(`${description} {enter} `)
  }

  static clickPay(){
    cy.get('input[type=submit]').contains('Pay').click()
  }

  static verifyPaymentSuccess(){
    cy.get('#alert_content').should('contain.text', 'The payment was successfully submitted.')
  }

  static selectCurrency(value){
    cy.get('#pc_currency').select(`${value}`)
  }

  static addCurrencyAmount(value){
    cy.get('#pc_amount').clear().type(`${value}`)
  }

  static selectUSDCurrency(){
    cy.get('#pc_inDollars_true').click()
  }

  static clickCalculateCosts(){
    cy.get('#pc_calculate_costs').click()
  }

  static verifyConversionAmount(currenyAmount){
    cy.get('#pc_conversion_amount').should('contain.text', `${currenyAmount}`)
  }

  static clickPurchase(){
    cy.get('input[type=submit]').contains('Purchase').click()
  }

  static verifySuccessMessage(){
    cy.get('#alert_content').should('contain.text',  'Foreign currency cash was successfully purchased.')
  }

}

export default PayBillPage
