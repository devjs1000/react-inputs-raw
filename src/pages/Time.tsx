import { Box } from '@chakra-ui/react'
import React from 'react'
import Calendar from '../components/Calendar'

const Time = () => {
  return (
    <Box>
        <Calendar date={new Date()} />
    </Box>
  )
}

export default Time