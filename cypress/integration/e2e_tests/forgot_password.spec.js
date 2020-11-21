import HomePage from '../../support/PageObjects/HomePage'
import LoginPage from '../../support/PageObjects/LoginPage'
import ForgotPaswordPage from '../../support/PageObjects/ForgotPasswordPage'

describe('test forgot password', () => {
  before(function() {
    HomePage.loadPage()
  })

  it('verifies user can click forgot password link, and verify forgot password functionality', () => {
    const email = 'test@forgotPassword.com'

    HomePage.clickSignInButton()
    LoginPage.clickForgotPasswordLink()
    ForgotPaswordPage.verifyPageTitle()
    ForgotPaswordPage.sendForgotPasswordEmail(email)
    ForgotPaswordPage.verifyForgotPasswordSentMessageForEmail(email)
  })

})
