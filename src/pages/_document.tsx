import { ServerStyleSheets as MuiServerStyleSheets } from '@material-ui/core'
import type { DocumentContext } from 'next/document'
import Document, { Html, Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet as StyledComponentsServerStyleSheet } from 'styled-components'

class AppDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const styledComponentsServerSheet = new StyledComponentsServerStyleSheet()
    const muiServerStyleSheets = new MuiServerStyleSheets()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            styledComponentsServerSheet.collectStyles(
              muiServerStyleSheets.collect(<App {...props} />)
            ),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {muiServerStyleSheets.getStyleElement()}
            {styledComponentsServerSheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      styledComponentsServerSheet.seal()
    }
  }

  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default AppDocument
