import { Box,Typography } from '@mui/material'
import React from 'react'

import { useParams } from 'react-router-dom'

export const ItemProduct = ({Content}) => {
    let {contentId} =useParams()
    console.log(contentId);
  return (
    <Box>
        <Typography variant='p'>{Content[contentId-1].Name}</Typography>
    </Box>
  )
}
