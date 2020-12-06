import {homePage} from '../../support/PageObjects/HomePage'
import {loginPage} from '../../support/PageObjects/LoginPage'
import {forgotPasswordPage} from '../../support/PageObjects/ForgotPasswordPage'

describe('test forgot password', () => {
  before(function() {
    homePage.loadPage()
  })

  it('verifies user can click forgot password link, and verify forgot password functionality', () => {
    const email = 'test@forgotPassword.com'

    homePage.clickSignInButton()
    loginPage.clickForgotPasswordLink()
    forgotPasswordPage.getPageTitle().should('be.visible')
    forgotPasswordPage.sendForgotPasswordEmail(email)
    forgotPasswordPage.getForgotPasswordSentMessageForEmail(email).should('be.visible')
  })

})
