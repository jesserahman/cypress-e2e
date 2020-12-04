import {loginPage} from '../../support/PageObjects/LoginPage'
import {accountSummaryPage} from '../../support/PageObjects/AccountSummaryPage'
import {navbar} from '../../support/Fragments/Navbar'

describe('Test Valid and Invalid Login', () => {
  beforeEach(function() {
    loginPage.loadPage()
  })

  it('tests that a user can logout', () => {
    // fixture loads a fixed set of data located in a file in fixtures folder

    cy.fixture('user').then( (usr) => {

      // using custom command from commands.js
      loginPage.login(usr.valid_username, usr.valid_password)
    })

    accountSummaryPage.getUrl().should('include', 'bank/account-summary.html')
    navbar.logout()
    loginPage.getUrl().should('include', 'index.html')
  })
})
