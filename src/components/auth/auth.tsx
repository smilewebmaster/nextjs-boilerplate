//
// Auth Component
// ...
//

import { signIn, signOut, useSession } from 'next-auth/react'
import useTranslation from 'next-translate/useTranslation'

function Auth(): JSX.Element {
    const { t } = useTranslation()
    const { data: session } = useSession()

    if (session) {
        return (
            <div className="ui-signin__block">
                {t('home:auth.signed_in_as', { name: session?.user?.email })}
                <button
                    className="ui-signin__action-btn"
                    onClick={() => signOut()}
                    type="button"
                >
                    {t('home:auth.sign_out_button')}
                </button>
            </div>
        )
    }

    return (
        <div className="ui-signin__block">
            {t('home:auth.not_signed_in')}
            <button
                className="ui-signin__action-btn"
                onClick={() => signIn()}
                type="button"
            >
                {t('home:auth.sign_in_button')}
            </button>
        </div>
    )
}

export default Auth

//
// END
//
