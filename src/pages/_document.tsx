//
// Document
// A custom Document is commonly used to augment your
// application's <html> and <body> tags. This is necessary because
// Next.js pages skip the definition of the surrounding document's markup.
//

import Document, {
    Html,
    Head,
    Main,
    NextScript,
    DocumentContext,
    DocumentInitialProps,
} from 'next/document'

class MyDocument extends Document {
    static async getInitialProps(
        ctx: DocumentContext
    ): Promise<DocumentInitialProps> {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render(): JSX.Element {
        const { locale } = this.props
        return (
            <Html lang={locale}>
                <Head />
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument

//
// END
//
