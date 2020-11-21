import HomePage from '../../support/PageObjects/HomePage'
import SearchResultsPage from '../../support/PageObjects/SearchResultsPage'

describe('test search functionality', () => {
  before(function() {
    HomePage.loadPage()
  })

  it('enters text into the search bar and search', () => {
    HomePage.searchForTextAndPressEnter("hello")
  })

  it('should show search results page', () => {
    SearchResultsPage.verifyPageTitle()
  })
})
