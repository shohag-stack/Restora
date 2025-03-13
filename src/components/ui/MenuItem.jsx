import React from 'react'
import { Box, Button, Image, Text } from '@chakra-ui/react'

export default function MenuItem({ title, price, image, category,onAddToCart }) {
  return (
    <>
      <Box
        borderRadius="10px"
        cursor="pointer"
        textAlign="left"
        bg='#fff'
        _hover={{
          borderColor:"#F54D2C",
          bg:"#fef5f3",

        }}

        borderWidth='1px'
        borderColor="#E5E5E5"
        display='flex'
        flexDir="column"
        justifyContent="left"
        alignItems="left"
        overflow="hidden"


      >
        <Image src={image} aspectRatio={4 / 3} fit="cover" alt={title} />
        <Box p={5}>
          <Text fontSize="18px" fontWeight="400">{title}</Text>
          <Text fontSize="14px" color="#959595" style={{fontWeight:"400"}} fontWeight="bold">{category}</Text>
          <Text fontSize="20px" fontWeight="600">{price}</Text>
          <Button onClick={onAddToCart}>add to cart</Button>
        </Box>
      </Box>
    </>
  )
}
