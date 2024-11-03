// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('login', (username, password) => {
    const baseUrl = Cypress.config("baseUrl")
    cy.visit(`${baseUrl}`)
    cy.intercept('GET', 'https://fcxlabs-ecommerce-api.ferreiracosta.com/shopping/v1/carts/anonymous?cookieId**')
        .as('cookies')

    cy.get('[data-cy="link-wrapper-user-desk"]').click()
    cy.get('[data-cy="input-email-login"]').should('be.visible').click()
    cy.get('[data-cy="input-email-login"]').should('be.visible').type(username)
    cy.get('[data-cy="input-password-login"]').should('be.visible').type(password)
    cy.get('[data-cy="button-submit-login"]').should('be.visible').should('be.enabled').click()

    cy.intercept('POST', 'https://www.ferreiracosta.com/api/identity/login').as('loginSuccess')

})