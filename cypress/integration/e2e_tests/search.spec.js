class BasePage {
  static loadHomePage() {
    cy.visit('http://zero.webappsecurity.com')
  }

  static wait(number) {
    cy.wait(number)
  }
}

class HomePage extends BasePage {
  static searchForTextAndPressEnter(text){
    cy.get('#searchTerm').clear().type(`${text} {enter}`)
  }
}

class SearchResultsPage extends HomePage {
  static verifyPageTitle(){
    cy.get('h2').contains('Search Results').should('be.visible')
  }
}

describe('test search functionality', () => {
  before(function() {
    HomePage.loadHomePage()
  })

  it('enters text into the search bar and search', () => {
    HomePage.searchForTextAndPressEnter("hello")
  })

  it('should show search results page', () => {
    SearchResultsPage.verifyPageTitle()
  })
})
