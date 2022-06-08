//
// Signin Page
// ...
//

import { InferGetServerSidePropsType } from 'next'
import { BuiltInProviderType } from 'next-auth/providers'
import { ClientSafeProvider, getProviders, LiteralUnion } from 'next-auth/react'
import useTranslation from 'next-translate/useTranslation'
import { useRouter } from 'next/router'
import Layout from '@app/components/layout/layout'
import Providers from '@app/components/providers/providers'

type TSignin = {
    props: {
        providers: Record<
            LiteralUnion<BuiltInProviderType, string>,
            ClientSafeProvider
        > | null
    }
}

type ProvidersType = InferGetServerSidePropsType<typeof getServerSideProps>

function SignIn({ providers }: ProvidersType): JSX.Element {
    const { t } = useTranslation()
    const { error } = useRouter().query
    const errorMessage = error
    const title = t('sign-in:title')
    const description = t('sign-in:description')

    return (
        <Layout
            title={title}
            description={description}
        >
            <div className="ui-signin">
                {errorMessage && <div className="error">{errorMessage}</div>}
                <Providers providers={providers} />
            </div>
        </Layout>
    )
}

export async function getServerSideProps(): Promise<TSignin> {
    const providers = await getProviders()

    return {
        props: { providers },
    }
}

export default SignIn

//
// END
//
