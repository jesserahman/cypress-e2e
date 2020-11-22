import HomePage from '../../support/PageObjects/HomePage'
import Navbar from '../../support/Fragments/Navbar'
import FeedbackPage from '../../support/PageObjects/FeedbackPage'

describe('test forgot password', () => {
  before(function() {
    HomePage.loadPage()
  })

  it('verifies user can click forgot password link, and verify forgot password functionality', () => {
    Navbar.clickFeedbackLink()
    FeedbackPage.veryPageTitle()
    FeedbackPage.fillOutName("Test User")
    FeedbackPage.fillOutEmail("test@user.com")
    FeedbackPage.fillOutSubject("Test Subject")
    FeedbackPage.fillOutMessageBody("test question here?")
    FeedbackPage.submitFormAndVerifySubmission()
  })
})
