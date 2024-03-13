describe('login test', () => {
    it('testlogin', () => {
      cy.signin()
      cy.get('a[href="/settings/profile"').contains("Settings").click({timeout:45000});
      cy.get('ul li').contains("Teams").should('include.text','Teams').click();
      
    })
  })