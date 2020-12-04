import BasePage from './BasePage'

class SearchResultsPage extends BasePage {
  pageTitle = 'h2';

  verifyPageTitle(){
    cy.get(this.pageTitle).contains('Search Results').should('be.visible')
  }
}

export const searchResultsPage = new SearchResultsPage();
