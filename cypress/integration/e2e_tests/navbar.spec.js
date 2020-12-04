import {homePage} from '../../support/PageObjects/HomePage'
import {onlineBankingPage} from '../../support/PageObjects/OnlineBanking'
import FeedbackPage from '../../support/PageObjects/FeedbackPage'
import {navbar} from '../../support/Fragments/Navbar'

describe('test navbar functionality', () => {
  beforeEach(function() {
    homePage.loadPage()
  })

  it('verifies Online Banking link Navbar Functionality', () => {
    navbar.clickOnlineBankingLink()
    onlineBankingPage.getUrl().should('include', 'online-banking')
  })

  it('verifies Feedback link Navbar Functionality', () => {
    navbar.clickFeedbackLink()
    FeedbackPage.getUrl().should('include', 'feedback')
  })

  it('verifies Home link Navbar Functionality', () => {
    navbar.clickHomeLink()
    homePage.getUrl().should('include', 'index')
  })

})
