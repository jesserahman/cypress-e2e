import HomePage from '../../support/PageObjects/HomePage'
import OnlineBakingPage from '../../support/PageObjects/OnlineBanking'
import FeedbackPage from '../../support/PageObjects/FeedbackPage'
import Navbar from '../../support/Fragments/Navbar'

describe('test navbar functionality', () => {
  beforeEach(function() {
    HomePage.loadPage()
  })

  it('verifies Online Banking link Navbar Functionality', () => {
    Navbar.clickOnlineBankingLink()
    OnlineBakingPage.getUrl().should('include', 'online-banking')
  })

  it('verifies Feedback link Navbar Functionality', () => {
    Navbar.clickFeedbackLink()
    FeedbackPage.getUrl().should('include', 'feedback')
  })

  it('verifies Home link Navbar Functionality', () => {
    Navbar.clickHomeLink()
    HomePage.getUrl().should('include', 'index')
  })

})
