import BasePage from './BasePage'

class SearchResultsPage extends BasePage {
  static verifyPageTitle(){
    cy.get('h2').contains('Search Results').should('be.visible')
  }
}

export default SearchResultsPage
