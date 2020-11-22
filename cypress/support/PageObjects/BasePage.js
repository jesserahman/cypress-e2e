class BasePage {
  static wait(number) {
    cy.wait(number)
  }

  static clearCookiesAndLocalStorage(){
    cy.clearCookies()
    cy.clearLocalStorage()
  }

  static getUrl(){
    return cy.url()
  }
}

export default BasePage
