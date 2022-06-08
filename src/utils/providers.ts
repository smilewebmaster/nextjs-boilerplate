//
// Auth Configuration
// ...
//

import GithubProvider from 'next-auth/providers/github'

const providers = [
    GithubProvider({
        clientId: process.env.GITHUB_ID,
        clientSecret: process.env.GITHUB_SECRET,
    }),
]

export default providers

//
// END
//
