
describe('Login', () => {
    it('Realizar login com sucesso', () => {
        cy.wait('@loginSuccess').then((interception) => {
            expect(interception.response.statusCode).to.eq(200)
            cy.get('[data-cy="link-wrapper-user-desk"]').should('be.visible').click()
            cy.get('[data-cy="option-user-authenticated-link"]').should('be.visible')
           
            
        })
    })
})