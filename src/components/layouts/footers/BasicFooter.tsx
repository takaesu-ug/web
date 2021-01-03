import { Box } from '@material-ui/core'
import React from 'react'
import styled from 'styled-components'

const Footer = styled(Box)`
  display: flex;
  justify-content: center;
  padding: 2rem;
`

// TODO: BaseLayoutにあるhooks実装すればsiteNameのpropsいらないかも
type Props = {
  siteName: string
}

export const BasicFooter: React.VFC<Props> = ({ siteName }) => {
  return <Footer component="footer">&copy; {siteName}</Footer>
}
