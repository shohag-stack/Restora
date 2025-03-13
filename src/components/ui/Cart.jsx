import React, { useState } from 'react'
import { Image, HStack, Text, VStack, IconButton, Box, Heading, Separator, RadioGroup, } from '@chakra-ui/react'
import { MdOutlineDeleteOutline } from "react-icons/md";
import { Button } from '../../components/ui/button';

export default function Cart({ cart, updateCartItemQuantity,deleteCartItem }) {

  const subTotal = cart.reduce((acc, item) => acc + item.basePrice * item.quantity, 0)
  const tax = subTotal * 0.10;
  const discount = subTotal * 0.15;
  const total = subTotal + tax - discount;
  const [value, setValue] = useState('cash')

  const items = [
    { label: "CASH", value: "1" },
    { label: "CARD", value: "2" },
    { label: "QR", value: "3" },
  ]


  return (
    <>
      <Box p={5}>
        <Heading>
          Cart Details
        </Heading>

        <Box maxH='350px' overflow='auto'>
          {cart.length === 0 ? (
            <Text>No items in cart</Text>

          ) : (
            cart.map(item => (
              <HStack key={item.id} justifyContent='space-between' py={4} >
                <HStack>
                  <Image width="70px" height="70px" borderRadius='10px' src={item.image} aspectRatio={4 / 3} fit="cover" alt={item.title} />
                  <VStack alignItems='flex-start'>
                    <Text>{item.title}</Text>
                    <HStack borderWidth='1px' borderRadius='7px'>
                      <Button lineHeight={0} p={2} variant='outline' size="xs" onClick={() => updateCartItemQuantity(item.categoryID, -1)}>-</Button>
                      <Text fontSize='12px'>{item.quantity}</Text>
                      <Button p={2} lineHeight={0} variant='outline' borderRadius='7px' size="xs" onClick={() => updateCartItemQuantity(item.categoryID, 1)}>+</Button>
                    </HStack>
                  </VStack>
                </HStack>

                <VStack alignItems='flex-end'>
                  <IconButton size='xs' variant='outline' onClick={()=> deleteCartItem(item.categoryID)}>
                    <MdOutlineDeleteOutline size='20px' />
                  </IconButton>
                  <Text>{`$${item.price}.00`}</Text>
                </VStack>

              </HStack>
            ))
          )
          }
        </Box>

        <Separator variant='solid' />
        <Box py={2}>
          <HStack justifyContent='space-between' pt='5px'>
            <Text fontSize='16px'>Subtotal </Text>
            <Text fontSize='16px'>{subTotal} </Text>
          </HStack>

          <HStack justifyContent='space-between' pt='5px'>
            <Text fontSize='16px'>Tax 10% </Text>
            <Text fontSize='16px'>{tax} </Text>
          </HStack>

          <HStack justifyContent='space-between' pt='5px'>
            <Text fontSize='16px'>Discount 15% </Text>
            <Text fontSize='16px'> {discount} </Text>
          </HStack>
        </Box>

        <Separator variant='dashed' />
        <Box py={2}>
          <HStack justifyContent='space-between' pt='5px'>
            <Text fontSize='16px' fontWeight='700'>Total </Text>
            <Text fontSize='16px' fontWeight='700'> {total} </Text>
          </HStack>
        </Box>

        <Separator variant='dashed' />
        <Box py={2}>
          <Text fontSize='16px' fontWeight='700'>Payment Method </Text>
          <HStack justifyContent='space-between' pt='5px'>
            <RadioGroup.Root value={value} onValueChange={(e) => setValue(e.value)}>
              <HStack gap="6">
                {items.map((item) => (
                  <RadioGroup.Item key={item.value} value={item.value}>
                    <RadioGroup.ItemHiddenInput />
                    <RadioGroup.ItemIndicator />
                    <RadioGroup.ItemText>{item.label}</RadioGroup.ItemText>
                  </RadioGroup.Item>
                ))}
              </HStack>
            </RadioGroup.Root>
          </HStack>
        </Box>
        <Separator variant='dashed' />
        <HStack>
          <Button cursor='pointer' visual="solid">
            Print Receipt
          </Button>

          <Button cursor='pointer' display='flex' justifyContent='center' alignItems='center' visual="solid">
            Place Order 
          </Button>
        </HStack>
      </Box>
    </>
  )
}
