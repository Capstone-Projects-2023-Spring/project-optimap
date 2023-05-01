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
        cy.get('button').contains('Login').click();

        //open the create route page
        cy.get('a').contains('Map').click();

        cy.contains('Main').click();

        //Input list of locations
        cy.get('#destination-input')
            .type('Villanova University')
            .wait(1000)
            .type('{downarrow}')
            .type('{enter}')
            .wait(1000);

        cy.get('button').contains('Update Route').click();
        cy.wait(1000)

        cy.get('button[aria-label="Zoom out"]').click().click().click();
        cy.wait(5000)

        // open the Profile page
        cy.get('a').contains('Profile').click();
        cy.get('[data-testid="settings"]').click()
        cy.wait(500)
        cy.get('input[name="avoidHighways"]').check()
        cy.wait(500)
        cy.get('input[name="avoidTolls"]').check()
        cy.wait(500)
        cy.get('button.mt-4').click();
        cy.wait(1000)

        //open the create route page
        cy.get('a').contains('Map').click();

        cy.contains('Main').click();

        //Input list of locations
        cy.get('#destination-input')
            .type('Villanova University')
            .wait(1000)
            .type('{downarrow}')
            .type('{enter}')
            .wait(1000);

        cy.get('button').contains('Update Route').click();
        cy.wait(1000)

        cy.get('button[aria-label="Zoom out"]').click().click().click();
        cy.wait(5000)
    })
})