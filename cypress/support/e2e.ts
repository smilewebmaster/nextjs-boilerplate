//
// Cypress Support
// ...
//

/// <reference types="cypress" />
// @ts-check

import 'cypress-real-events/support'

declare global {
    namespace Cypress {
        interface Chainable {
            /**
             * Custom command to select DOM element by data-cy attribute.
             * @example cy.dataCy('greeting')
             */
            dataCy(value: string): Chainable<Element>
        }
    }
}

//
// END
//
