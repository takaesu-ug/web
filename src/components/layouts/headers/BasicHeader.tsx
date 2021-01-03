import { Typography, AppBar, Toolbar } from '@material-ui/core'
import React from 'react'

export const BasicHeader = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">TAKAS.DEV</Typography>
      </Toolbar>
    </AppBar>
  )
}
