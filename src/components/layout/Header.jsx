import React from 'react'
import { VStack, Box, Text } from '@chakra-ui/react'

export default function Header() {
  return (
    <>
      <Box 
        borderRight="1px solid" 
        borderRightColor='#e7e7e7' 
        display='flex' 
        justifyContent='flex-end' // Push content to the right
        p={5}
        bg="#fff"
      >
        <VStack alignItems="flex-end" gap={0}>  
          <Text fontWeight="bold" m={0} p={0}>John Smith</Text>
          <Text fontSize="sm" m={0} p={0}>Staff</Text>
        </VStack>
      </Box>
    </>
  )
}