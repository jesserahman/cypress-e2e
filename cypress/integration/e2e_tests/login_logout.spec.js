import {loginPage} from '../../support/PageObjects/LoginPage'
import {accountSummaryPage} from '../../support/PageObjects/AccountSummaryPage'
import {navbar} from '../../support/Fragments/Navbar'

describe('Test Valid and Invalid Login and Logout', () => {
  before(function() {
    loginPage.loadPage()
  })

  it('should throw an error for invalid email credentials', () => {
    cy.fixture('user').then( (usr) => {
      const username = usr.invalid_username
      const password = usr.invalid_password
      loginPage.login(username,password)
    })

    loginPage.verifyErrorMessage()
  })

  it('should sucessfully login', () => {

    cy.fixture('user').then( (usr) => {
      loginPage.login(usr.valid_username, usr.valid_password)
    })

    accountSummaryPage.getUrl().should('include', 'bank/account-summary.html')
  })

  it('should successfully logout', () => {
    accountSummaryPage.getUrl().should('include', 'bank/account-summary.html')
    navbar.clickUsernameLink()
    navbar.clickLogoutButton()
    loginPage.getUrl().should('include', 'index.html')
  })

})
