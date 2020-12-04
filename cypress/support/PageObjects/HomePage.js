import BasePage from './BasePage'

class HomePage extends BasePage {
  // add all selector strings
  url = 'http://zero.webappsecurity.com';
  searchField = '#searchTerm';
  signInButton = '#signin_button'

  loadPage() {
    cy.visit(this.url)
  }

  searchForTextAndPressEnter(text){
    cy.get(this.searchField).clear().type(`${text} {enter}`)
  }

  clickSignInButton(){
    cy.get(signInButton).click()
  }
}

export const homePage = new HomePage();
