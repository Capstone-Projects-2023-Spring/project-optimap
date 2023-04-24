describe('login', () => {
    it('user should be able to log in', () => {
      cy.visit('https://stpaex.github.io/OptiMap')

      //cy.wait(5000) // Wait for 5 seconds
      // open the login modal
      cy.get('a').contains('Login').click();
  
      // fill in the form
      cy.get('input[type="email"]').type('test@test.com')
      cy.get('input[type="password"]').type('test123')
  
      // submit the form 
      cy.get('button').contains('Login').click()
      cy.contains('a', 'Logout').should('be.visible')
    })
  })