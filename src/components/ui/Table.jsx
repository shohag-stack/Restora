import React from 'react'
import { Box, Button, Image, Text, Menu, Portal, HStack, VStack } from '@chakra-ui/react'
import { CiMenuKebab } from "react-icons/ci";

export default function Table({ title, icon, status, onAddToCart, onDeleteItems, seats, onSelect }) {



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
                onClick={onSelect}

            >
                <Box p={3}>
                    <VStack alignItems='flex-start'>

                        <HStack justifyContent='space-between' w='100%'>
                            <Text fontSize="18px" fontWeight="400">{title}</Text>
                            <Text color={status === "available" ? "#3D7C67" : '#c14f4f'} fontSize="14px" fontWeight="500" px={4} borderRadius='100px' py={2} bg={status === "available" ? "#DAF8EE" : '#F8DADA'}>{status}</Text>
                        </HStack>
                        <Box alignItems='center' justifyContent='center' display='flex' w='100%'>
                            <Image maxW="100px" aspectRatio={4 / 3} fit='fill' src={icon} />
                        </Box>
                        <HStack w='100%' justifyContent='space-between' alignItems='flex-start'>
                            <Box>
                                <Text fontSize="18px" fontWeight="400">{`${seats} Person`}</Text>
                            </Box>
                            <Menu.Root>
                                <Menu.Trigger asChild>
                                    <Button variant="outline" size="xs">
                                        <CiMenuKebab />
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

                    </VStack>
                </Box>
            </Box>
        </>
    )
}
