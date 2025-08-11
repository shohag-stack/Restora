import { Box } from '@chakra-ui/react'
import React from 'react'
import Greetings from '../components/ui/Greetings' 
import OverView from '../components/ui/OverView'

export default function Dashboard() {
  return (
    <Box overflow={"auto"} bg="gray.100" minH="100vh">
      <Greetings/>
      <OverView/>
    </Box>
  )
}
