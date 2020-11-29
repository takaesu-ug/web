import { CssBaseline } from '@material-ui/core'
import { StylesProvider, ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles'
import { AppProps } from 'next/app'
import { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components'
import { theme } from '@/styles/theme'

const MyApp = ({ Component, pageProps }: AppProps) => (
  <StylesProvider injectFirst>
    <MuiThemeProvider theme={theme}>
      <StyledComponentsThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </StyledComponentsThemeProvider>
    </MuiThemeProvider>
  </StylesProvider>
)

export default MyApp
