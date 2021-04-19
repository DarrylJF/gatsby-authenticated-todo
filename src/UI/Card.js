import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { Card } from '@material-ui/core'

const useStyles = makeStyles({
  root: {
    minWidth: 275
  },
})

const OutlinedCard = ({children}) => {
  const classes = useStyles()

  return (
    <Card className={classes.root}>{children}</Card>
  )
}

export default OutlinedCard

