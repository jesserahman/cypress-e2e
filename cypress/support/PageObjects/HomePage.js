import BasePage from './BasePage'

class HomePage extends BasePage {
  static loadPage() {
    cy.visit('http://zero.webappsecurity.com')
  }

  static searchForTextAndPressEnter(text){
    cy.get('#searchTerm').clear().type(`${text} {enter}`)
  }

  static clickSignInButton(){
    cy.get('#signin_button').click()
  }
}

export default HomePage
