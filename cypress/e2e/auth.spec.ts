//
// Auth E2E Tests
// ...
//

describe('Auth Page E2E Tests', () => {
    it('Sign-in Button Test', () => {
        cy.visit(Cypress.env('index_url'))
        cy.get('.ui-signin__action-btn').contains('Sign In')
    })

    it('Provider Buttons Test', () => {
        cy.visit(Cypress.env('signin_url'))
        cy.get('.ui-signin__action-btn').contains('Sign in with GitHub')
    })
})

export {}

//
// END
//
