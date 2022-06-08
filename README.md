# Boilerplate and Starter for Next JS 12+, Prisma ORM, Next-Auth and TypeScript.

## Fullstack project structure

🚀 Boilerplate and Starter for Next.js, Prisma ORM, Next-Auth and TypeScript ⚡️ Made with developer experience first: Next.js, TypeScript, ESLint, Prettier, Husky, Lint-Staged.

### Features

Developer experience first:

-   🔥 [Next.js 12](https://nextjs.org)
-   🦄 Integrate with [next-auth](https://next-auth.js.org/)
-   🦄 Integrate with [prisma](https://www.prisma.io/)
-   🦄 Integrate with [React Query](https://react-query.tanstack.com/)
-   🎉 Type checking [TypeScript](https://www.typescriptlang.org)
-   🦄 Strict Mode for TypeScript and React 17
-   ✏️ Linter with [ESLint](https://eslint.org) (default NextJS, NextJS Core Web Vitals and Airbnb configuration)
-   🛠 Code Formatter with [Prettier](https://prettier.io)
-   🦊 Husky for Git Hooks
-   🚫 Lint-staged for running linters on Git staged files
-   🤖 SEO metadata, JSON-LD and Open Graph tags with Next SEO
-   ⚙️ [Bundler Analyzer](https://www.npmjs.com/package/@next/bundle-analyzer)
-   🖱️ One click deployment with Vercel or Netlify (or manual deployment to any hosting services)
-   💯 Maximize lighthouse score
-   🤖 i18n Locatization [next-translate](https://github.com/vinissimus/next-translate)
-   🦄 Integrate with [cypress](https://https://www.cypress.io/)
-   🎉 ready-to-use functions
-   🎉 Cloc command - quickly count (source) lines

### Built-in feature from Next.js:

-   ☕ Minify HTML & CSS
-   💨 Live reload
-   ✅ Cache busting

### Philosophy

-   Minimal code
-   SEO-friendly
-   🚀 Production-ready
-   🚀 Serverless-ready

### Requirements

-   Node.js, yarn and npm

### Select Database

Just change the schema path in package.json. It is ready for mongodb, mysql, postgresql.

For database connection, it is sufficient to write to the relevant env variable in the .env file.

```json
"schema": "db/psql.prisma"
```

```json
"schema": "db/mysql.prisma"
```

```json
"schema": "db/mdb.prisma"
```

```env
PSQL_CONNECTION_STRING=""
MDB_CONNECTION_STRING=""
MYSQL_CONNECTION_STRING=""
```

**Database migration**

```bash
NAME=<set_name> yarn prisma:migrate
```

### Docker build and run

```bash
docker build -t nextjs-boilerplate .
docker run -p 3000:3000 nextjs-boilerplate
```

### Getting started

Run the following command on your local environment:

```bash
git clone --depth=1 https://github.com/bbg/nextjs-boilerplate.git my-project-name
cd my-project-name
yarn install
```

Database publish

```bash
yarn prisma:gen
yarn prisma:push
```

Then, you can run locally in development mode with live reload:

```bash
yarn dev
```

Build

```bash
yarn build
```

Quickly count source lines

```bash
yarn cloc
```

Open http://localhost:3000 with your favorite browser to see your project.

```
├── README.md                # README file
├── cypress                  # Cypress root folder
├── e2e                      # The folder where the e2e tests are located
├── docs                     # Project document folder
├── public                   # Public folder
├── locales                  # Localization Json files are kept in this folder
├── src
│   ├── components           # All Components
│   ├── hooks                # React hooks
│   ├── pages                # Next JS pages
│   ├── scss                 # SCSS styles folder
│   └── functions            # All functions are collected here.
|   └── types                # Global types folder.
├── db.prisma                # Prisma database schema
├── tsconfig.json            # TypeScript configuration
├── i18n.json                # Next-Translation configuration
├── cypress.json             # Cypress configuration
├── next.config.js           # Next JS configuration
├── netlify.toml             # Netlify publish configuration

```

### Deploy to production

You can see the results locally in production mode with:

```bash
$ yarn run build
$ yarn run start
```

The generated HTML and CSS files are minified (built-in feature from Next js).

You can create an optimized production build with:

```bash
yarn run build:prod
```

Now, your blog is ready to be deployed. All generated files are located at `out` folder, which you can deploy with any hosting service.

### Commands Scripts

```
├── dev                # NextJS Development Run
├── build              # NextJS Build
├── build:stats        # NextJS Bundle Analyze
├── build:types        # Types check and build
├── start              # NextJS Production Start
├── export             # NextJS Static Export
├── clean              # .next and out file cleaner
├── lint               # Eslint Check
├── lint:fix           # Eslint Check and Fix
├── forrmat            # Prettier Run
├── prepare            # Huksy Install
├── cy:open            # Cypress Browser E2E Testing Run
├── cy:run             # Cypress Headlesss E2E Testing Run
├── prisma:gen         # Prisma Generator
├── prisma:push        # Prisma DB Schema Push
├── prisma:studio      # Prisma Studio DB Client Open

```

### Deploy to Netlify

Clone this repository on own GitHub account and deploy to Netlify:

[![Netlify Deploy button](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/bbg/nextjs-boilerplate.git)

### Deploy to Vercel

Deploy this Next JS Boilerplate on Vercel in one click:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https://github.com/bbg/nextjs-boilerplate.git)

### Preview

Preview the example live on [StackBlitz](http://stackblitz.com/):

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://github.com/bbg/nextjs-boilerplate.git)

### Contributions

Everyone is welcome to contribute to this project. Feel free to open an issue if you have question or found a bug.

### License

Licensed under the MIT License, Copyright © 2020

See [LICENSE](LICENSE) for more information.
