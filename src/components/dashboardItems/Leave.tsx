import React from 'react'
import { Box } from '../Box'
import { Text } from '../typography/Text'

type LeaveProps = {
  title: string
}

export const Leave = ({title} : LeaveProps) => {
  return (
    <Box  className='border border-zinc-800 m-2 mx-3' variant='center' >
      <Text>{title}</Text>
    </Box>
  )
}



