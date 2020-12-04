class Navbar {

  clickHomeLink(){
    cy.get('#homeMenu').click();
  }

  clickOnlineBankingLink(){
    cy.get("#onlineBankingMenu").click()
  }

  clickFeedbackLink(){
    cy.get("#feedback").click()
  }

  clickUsernameLink(){
    cy.get('.dropdown-toggle').contains('username').click()
  }

  clickLogoutButton(){
    cy.get('#logout_link') .click()
  }

  clickPayBillsTab(){
    cy.get('#pay_bills_tab') .click()
  }

  clickTranferFundsTab(){
    cy.get('#transfer_funds_tab') .click()
  }

  clickAccountActivityTab(){
    cy.get('#account_activity_tab') .click()
  }

  logout(){
    this.clickUsernameLink();
    this.clickLogoutButton();
  }

}

export const navbar = new Navbar();
