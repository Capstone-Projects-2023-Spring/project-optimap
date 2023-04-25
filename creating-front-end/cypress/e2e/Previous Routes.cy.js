describe('login', () => {
    it('user should be able to log in', () => {
        cy.visit('https://stpaex.github.io/OptiMap')

        // open the login modal
        cy.get('a').contains('Login').click();

        // fill in the form
        cy.get('input[type="email"]').type('test@test.com')
        cy.get('input[type="password"]').type('test123')

        // submit the form 
        cy.get('button').contains('Login').click()

        //open the Saved Routes page
        cy.get('a').contains('Saved Routes').click();


        cy.wait(2000)
        //Click on the Saved Route
        cy.get('button.ml-auto.btn.btn-success.btn-sm').eq(0).click()

    })
})