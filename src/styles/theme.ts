import { createMuiTheme } from '@material-ui/core'

// TODO: テーマは使い所模索中
const theme = createMuiTheme({
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    // https://material-ui.com/ja/customization/typography/#html-font-size
    // Tell Material-UI what's the font-size on the html element is.
    htmlFontSize: 10,
  },
})

export { theme }
