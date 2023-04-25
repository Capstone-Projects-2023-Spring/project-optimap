describe('login', () => {
  it('user should be able to log in', () => {
    cy.visit('https://stpaex.github.io/OptiMap')

    //cy.wait(5000) // Wait for 5 seconds
    // open the login modal
    cy.get('a').contains('Login').click();
    cy.get('button').contains('Create Account').click();


    // generate random email and password
    const email = `test${Math.floor(Math.random() * 100000)}@test.com`;
    const password = Math.random().toString(36).substring(2);

    // fill in the form
    cy.get('input[type="email"]').type(email);
    cy.get('#formBasicPassword').type(password);
    cy.get('#formBasicConfirmPassword').type(password);


    // submit the form 
    cy.get('button[type="submit"]').contains('Sign Up').click();
    cy.wait(1000);
    cy.contains('a', 'Logout').should('be.visible').click();
  })
})