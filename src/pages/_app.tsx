import { CssBaseline } from '@material-ui/core'
import { StylesProvider, ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles'
import type { AppProps } from 'next/app'
import {
  createGlobalStyle,
  ThemeProvider as StyledComponentsThemeProvider,
} from 'styled-components'
import { theme } from '@/styles/theme'

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 62.5%;
  }
  body {
    font-size: 1.6rem;
  }
`

const MyApp = ({ Component, pageProps }: AppProps) => (
  <StylesProvider injectFirst>
    <MuiThemeProvider theme={theme}>
      <StyledComponentsThemeProvider theme={theme}>
        <CssBaseline />
        <GlobalStyle />
        <Component {...pageProps} />
      </StyledComponentsThemeProvider>
    </MuiThemeProvider>
  </StylesProvider>
)

export default MyApp
