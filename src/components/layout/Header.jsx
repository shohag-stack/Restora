import React from 'react'
import { VStack, Box, Text, HStack, Image } from '@chakra-ui/react'

export default function Header() {
  return (
    <>
      <Box 
        display='flex' 
        justifyContent='flex-end' // Push content to the right
        p={4}
        bg="#fff"
        shadow={"xs"}
        zIndex={1000}
      >
        <HStack>
              <Image
              src="https://bit.ly/naruto-sage"
              boxSize="40px"
              borderRadius="full"
              fit="cover"
              alt="Naruto Uzumaki"
            />
            <VStack alignItems="flex-start" gap={0}>  
            <Text fontWeight="bold" m={0} p={0}>John Smith</Text>
            <Text fontSize="sm" m={0} p={0}>Staff</Text>
          </VStack>
        </HStack>
      </Box>
    </>
  )
}