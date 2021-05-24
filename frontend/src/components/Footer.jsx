import React from 'react'
import { Grid, Typography, Button } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'
import EditIcon from '@material-ui/icons/Edit'
import AddMenu from './AddMenu'
import EditMenu from './EditMenu'

const Footer = () => {
  return (
    <Grid container spacing={3} justify="flex-end"  > 
    {/* style={{ position: "fixed", bottom: 0 }} */}
      <Grid item xs={12} align="right">
        <AddMenu />
        <EditMenu />
      </Grid>
    </Grid>
  )
}

export default Footer
