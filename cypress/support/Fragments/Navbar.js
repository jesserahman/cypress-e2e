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

}

export default Navbar
