class Navbar {
  static clickHomeLink(){
    cy.get('#homeMenu').click();
  }

  static clickOnlineBankingLink(){
    cy.get("#onlineBankingMenu").click()
  }

  static clickFeedbackLink(){
    cy.get("#feedback").click()
  }

  static clickUsernameLink(){
    cy.get('.dropdown-toggle').contains('username').click()
  }

  static clickLogoutButton(){
    cy.get('#logout_link') .click()
  }

  static clickPayBillsTab(){
    cy.get('#pay_bills_tab') .click()
  }

  static clickTranferFundsTab(){
    cy.get('#transfer_funds_tab') .click()
  }

  static clickAccountActivityTab(){
    cy.get('#account_activity_tab') .click()
  }

}

export default Navbar
