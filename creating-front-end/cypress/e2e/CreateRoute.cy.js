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

        //open the create route page
        cy.get('a').contains('Create Route').click();

        //Input list of locations
        cy.get('#location-input')
            .type('Temple University')
            .wait(1000)
            .type('{downarrow}')
            .type('{enter}')
            .wait(500);

        // Ignore "Cannot read properties of undefined" error
        cy.on('uncaught:exception', (err) => {
            if (err.message.includes('Cannot read properties of undefined')) {
                return false
            }
        })
        cy.get('button[type="submit"]').click();
        cy.wait(1000)


        //Repeating
        cy.get('#location-input')
            .clear()
            .type('Drexel Univsersity')
            .wait(1000) // Wait for 1 seconds
            .type('{downarrow}')
            .type('{enter}')
            .wait(500);

        cy.on('uncaught:exception', (err) => {
            if (err.message.includes('Cannot read properties of undefined')) {
                return false
            }
        })
        cy.get('button[type="submit"]').click();
        cy.wait(1000)

        //Repeating
        cy.get('#location-input')
            .clear()
            .type('Villanova Univsersity')
            .wait(1000) // Wait for 1 seconds
            .type('{downarrow}')
            .type('{enter}')
            .wait(500);

        cy.on('uncaught:exception', (err) => {
            if (err.message.includes('Cannot read properties of undefined')) {
                return false
            }
        })
        cy.get('button[type="submit"]').click();

        cy.get('button[type="button"]').contains('Run').click();
    })
})