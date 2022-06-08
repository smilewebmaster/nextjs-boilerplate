//
// Lint Staged Config
//

module.exports = {
    '*.{js,jsx,ts,tsx}': ['npm run lint:fix', 'eslint'],
    '**/*.ts?(x)': () => 'npm run build:types',
    '*.json': ['npm run format'],
}

//
// END
//
