// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands';

// Alternatively you can use CommonJS syntax:
// require('./commands')
import usersFixtures from "../fixtures/users.json"

beforeEach(() => {
    
    //login
    let user = usersFixtures.users.user
    let password = usersFixtures.users.password
    cy.login(user, password)

    //close message cookies
    cy.wait('@cookies')
    cy.get('[data-cy="button-close-modal-cookie"]').click()    

    //if necessary
    //close validate phone
    cy.get('[data-cy="responsive-modal-secondary-button"]').should('be.visible').click()
});

Cypress.on('uncaught:exception', (err, runnable) => {
    return false
});