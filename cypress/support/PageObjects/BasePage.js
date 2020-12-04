class BasePage {

  getBaseUrl(){
    return 'http://zero.webappsecurity.com'
  }

  wait(number) {
    cy.wait(number)
  }

  clearCookiesAndLocalStorage(){
    cy.clearCookies()
    cy.clearLocalStorage()
  }

  getUrl(){
    return cy.url()
  }
}

export default BasePage
