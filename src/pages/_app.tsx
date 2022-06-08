//
// Application
// ...
//

import React from 'react'
import { SessionProvider } from 'next-auth/react'
import { AppProps } from 'next/app'
import { QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import queryClient from '@app/utils/query-client'

function Application({
    Component,
    pageProps: { session, ...pageProps },
}: AppProps): JSX.Element {
    const [stateQueryClient] = React.useState(() => queryClient)

    return (
        <SessionProvider session={session}>
            <QueryClientProvider client={stateQueryClient}>
                <Component {...pageProps} />
                <ReactQueryDevtools />
            </QueryClientProvider>
        </SessionProvider>
    )
}

export default Application

//
// END
//
