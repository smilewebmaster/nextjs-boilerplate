//
// Main Layout Component
// ...
//

import React from 'react'
import { NextSeo } from 'next-seo'
import useTranslation from 'next-translate/useTranslation'
import Head from 'next/head'

type TMainLayoutProps = {
    children: JSX.Element | Array<JSX.Element>
    title: string
    description: string
    canonical?: string
}

function Layout({
    children,
    title,
    description,
    canonical,
}: TMainLayoutProps): JSX.Element {
    const { t } = useTranslation()

    return (
        <main className="ui-main">
            <Head>
                <meta
                    charSet="UTF-8"
                    key="charset"
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                    key="viewport"
                />
                <title>{t('common:title')}</title>
            </Head>
            <NextSeo
                title={title}
                description={description}
                canonical={canonical}
                openGraph={{
                    title,
                    description,
                    url: canonical,
                    locale: t('common:locale'),
                    site_name: t('common:site_name'),
                }}
            />
            <div>
                <h1>NextJS - Boilerplate</h1>
                <div className="ui-container">{children}</div>
            </div>
        </main>
    )
}

export default Layout

//
// END
//
