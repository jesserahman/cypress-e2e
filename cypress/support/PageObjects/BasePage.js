class BasePage {
  static wait(number) {
    cy.wait(number)
  }

  static getUrl(){
    return cy.url()
  }
}

export default BasePage
