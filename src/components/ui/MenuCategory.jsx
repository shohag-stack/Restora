import React from 'react'
import { Button, Image, Text } from '@chakra-ui/react'

export default function MenuCategory({ title, count, icon, setSelectedCategory, id, selectedCategory }) {

  const isSelected = id === selectedCategory;
  return (
    <>
      <Button
        py={16}
        px={6}
        borderRadius="10px"
        cursor="pointer"
        textAlign="center"
        bg={isSelected ? '#F54D2C' : '#fff'}
        _hover={{
          bg: "#F54D2C",
          color: "#fff",
        }}
        _active={{
          bg: "#F54D2C",
          color: "#fff",
        }}

        borderWidth='1px'
        borderColor="#E5E5E5"
        display='flex'
        flexDir="column"
        justifyContent="center"
        alignItems="center"
        color={isSelected ? "#fff" : "#000"}
        onClick={() => setSelectedCategory(id)}

      >
        <Image src={icon} boxSize="30px" alt={title} />
        <Text fontSize="sm" fontWeight="bold">{title}</Text>
        <Text fontSize="xs">{count} Item</Text>
      </Button>
    </>
  )
}


