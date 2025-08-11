import { Box , Heading, VStack, Highlight} from '@chakra-ui/react'
import React from 'react'

export default function Greetings() {
  return (
    <Box paddingY={70} bgSize="cover" bgImage={"url(../../assets/banner.png)"} p={10}>
            <VStack alignItems='flex-start'>
                <Heading fontSize={30} fontWeight={400} color="orange.500">Hi , Restora  </Heading>
                <Heading fontWeight={700} size="5xl"> Welcome Back </Heading>
            </VStack>
    </Box>
  )
}
