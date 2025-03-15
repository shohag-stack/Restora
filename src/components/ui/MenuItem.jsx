import React from 'react'
import { Box, Button, Image, Text,Menu,Portal,HStack,VStack } from '@chakra-ui/react'
import { CiMenuKebab } from "react-icons/ci";

export default function MenuItem({ title, price, image, category, onAddToCart,onDeleteItems }) {



  return (
    <>
      <Box
        borderRadius="10px"
        cursor="pointer"
        textAlign="left"
        bg='#fff'
        _hover={{
          borderColor: "#F54D2C",
          bg: "#fef5f3",

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
        <Box p={3}>
          <VStack alignItems='flex-start'>
            <HStack w='100%' justifyContent='space-between' alignItems='flex-start'>
              <Box>
                <Text fontSize="18px" fontWeight="400">{title}</Text>
                <Text fontSize="14px" color="#959595" style={{ fontWeight: "400" }} fontWeight="bold">{category}</Text>
                <Text fontSize="20px" fontWeight="600">{price}</Text>
              </Box>

              <Menu.Root>
                <Menu.Trigger asChild>
                  <Button variant="outline" size="xs">
                    <CiMenuKebab/>
                  </Button>
                </Menu.Trigger>
                <Portal>
                  <Menu.Positioner>
                    <Menu.Content>
                      <Menu.Item value="new-txt">Update</Menu.Item>
                      <Menu.Item value="new-file" onClick={onDeleteItems}>Delete</Menu.Item>
                    </Menu.Content>
                  </Menu.Positioner>
                </Portal>
              </Menu.Root>
            </HStack>

            <Button size="sm" onClick={onAddToCart}>add to cart</Button>


          </VStack>
        </Box>
      </Box>
    </>
  )
}
