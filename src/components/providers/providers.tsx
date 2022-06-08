//
// Auth Component
// ...
//

import { BuiltInProviderType } from 'next-auth/providers'
import { ClientSafeProvider, LiteralUnion, signIn } from 'next-auth/react'
import useTranslation from 'next-translate/useTranslation'

type ProvidersType = Record<
    LiteralUnion<BuiltInProviderType, string>,
    ClientSafeProvider
> | null

function Providers({ providers }: { providers: ProvidersType }): JSX.Element {
    const { t } = useTranslation()

    return (
        <>
            {providers &&
                Object.values(providers).map((provider: ClientSafeProvider) => (
                    <button
                        className="ui-signin__action-btn"
                        onClick={() => signIn(provider.id)}
                        key={provider.name}
                        type="button"
                    >
                        <span>
                            {t('sign-in:buttons.sign_in_with', {
                                provider: provider.name,
                            })}
                        </span>
                    </button>
                ))}
        </>
    )
}

export default Providers

//
// END
//
