import LoginPage from '../../support/PageObjects/LoginPage'
import AccountSummaryPage from '../../support/PageObjects/AccountSummaryPage'
import Navbar from '../../support/Fragments/Navbar'

describe('Test Valid and Invalid Login', () => {
  beforeEach(function() {
    LoginPage.loadPage()
  })

  it('tests that a user can logout', () => {
    // fixture loads a fixed set of data located in a file in fixtures folder

    cy.fixture('user').then( (usr) => {
      const username = usr.valid_username
      const password = usr.valid_password

      // using custom command from commands.js
      cy.login(username, password)
    })

    AccountSummaryPage.getUrl().should('include', 'bank/account-summary.html')
    Navbar.clickUsernameLink()
    Navbar.clickLogoutButton()
    LoginPage.getUrl().should('include', 'index.html')
  })

})
