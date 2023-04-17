import React from 'react'
import {Box} from '@mui/material'
import { Swipe } from './Swipe/Swipe'
import { Product } from './Product/Product'

export const Components = ({Content}) => {
  return (
    <Box>
      <Swipe/>
      <Product Content={Content}/>
    </Box>
  )
}
