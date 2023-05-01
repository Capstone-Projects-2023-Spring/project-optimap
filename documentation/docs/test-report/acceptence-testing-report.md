---
sidebar_position: 3
---

# Acceptance Test 

## UserAuthentication
```describe('login', () => {
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
```

<iframe width="560" height="315" src="https://www.youtube.com/embed/6LXJPvh143s" frameborder="0" allowfullscreen="true"></iframe>

## CreateRoute

```describe('login', () => {
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
            .wait(1000);

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
            .wait(1000);

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
            .wait(1000);

        cy.on('uncaught:exception', (err) => {
            if (err.message.includes('Cannot read properties of undefined')) {
                return false
            }
        })
        cy.get('button[type="submit"]').click();
        cy.wait(1000)

        cy.get('button').contains('Save').click();
        cy.get('#routeName').type('Route 1')
        cy.get('button.btn-primary').contains('Save Changes').click();


        cy.get('button[type="button"]').contains('Run').click();
    })
})
```

<iframe width="560" height="315" src="https://www.youtube.com/embed/sqfPr7zxhng" frameborder="0" allowfullscreen="true"></iframe>

## PreviousRoute

```
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
```

<iframe width="560" height="315" src="https://www.youtube.com/embed/5J67YzGIgtA" frameborder="0" allowfullscreen="true"></iframe>

## Settings

```
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
```

<iframe width="560" height="315" src="https://www.youtube.com/embed/_naa33ZQms0" frameborder="0" allowfullscreen="true"></iframe>