import { Box } from '@mui/material'
import React from 'react'
import { Shuus } from './Shuus/Shuus'


export const Shoes = ({Shoos}) => {
  return (
    <Box>
        <Shuus Shoos={Shoos}/>
    </Box>
  )
}
