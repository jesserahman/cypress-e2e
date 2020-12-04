import {navbar} from '../../support/Fragments/Navbar'
import {feedbackPage} from '../../support/PageObjects/feedbackPage'

describe('verify user can submit feedback form on feedback page', () => {
  before(function() {
    feedbackPage.loadPage()
  })

  it('verifies user can click forgot password link, and verify forgot password functionality', () => {
    Navbar.clickFeedbackLink()
    feedbackPage.veryPageTitle()
    feedbackPage.fillOutName("Test User")
    feedbackPage.fillOutEmail("test@user.com")
    feedbackPage.fillOutSubject("Test Subject")
    feedbackPage.fillOutMessageBody("test question here?")
    feedbackPage.submitFormAndVerifySubmission()
    this.getFormSubmitMessage().should('be.visible')
  })
})
