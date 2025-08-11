import { Box, VStack, Heading, Image } from '@chakra-ui/react'
import React from 'react'
import { Button } from '@chakra-ui/react'

export default function OfferSideBar() {
  return (
    <Box p={2} borderWidth="1px" borderRadius="md" bg="white">
      <Image src={"../../assets/sideBar.png"}/>
      <VStack textAlign="center" py={4} spacing={2}>
        <Heading size="2xl">Delicious</Heading>
        <Heading size="3xl">American Food Menu</Heading>
        <Button variants="solid" >Upgrade Now</Button>
      </VStack>
      </Box>
  )
}
