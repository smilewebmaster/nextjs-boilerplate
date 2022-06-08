//
// Cypress Configuration
// ...
//

import { defineConfig } from 'cypress'

export default defineConfig({
    projectId: 'eq8e9s',
    viewportWidth: 1920,
    viewportHeight: 1080,
    env: {
        index_url: '/',
        signin_url: '/auth/signin',
    },
    e2e: {
        // We've imported your old cypress plugins here.
        // You may want to clean this up later by importing these.
        setupNodeEvents(on, config) {
            // eslint-disable-next-line @typescript-eslint/no-var-requires
            return require('./cypress/plugins').default(on, config)
        },
        baseUrl: 'http://localhost:3000',
        specPattern: 'cypress/e2e/**/*.spec.ts',
    },
    component: {
        devServer: {
            framework: 'next',
            bundler: 'webpack',
        },
    },
})

//
// END
//
