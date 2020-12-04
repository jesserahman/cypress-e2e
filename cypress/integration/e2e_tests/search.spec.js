import {homePage} from '../../support/PageObjects/HomePage'
import {searchResultsPage} from '../../support/PageObjects/SearchResultsPage'

describe('test search functionality', () => {

  before(function() {
    homePage.loadPage()
  })

  it('should search for a keyword and verify results', () => {
    homePage.searchForTextAndPressEnter("hello")
    searchResultsPage.verifyPageTitle()
  })
})
