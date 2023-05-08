import { Box } from '@mui/material'
import React from 'react'
import { Elektron } from './Elektron/Elektron'

export const Elektronics = ({Elektro}) => {
  return (
    <Box>
    <Elektron Elektro={Elektro}/>
    </Box>
  )
}
