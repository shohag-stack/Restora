import React, { useState, useEffect } from 'react'
import { Image, HStack, Text, VStack, IconButton, Box, Heading, Separator, RadioGroup, Input, Button, Grid } from '@chakra-ui/react'
import { MdOutlineDeleteOutline } from "react-icons/md";
import { IoMdAdd } from "react-icons/io";
import {
  DialogActionTrigger,
  DialogBody,
  DialogCloseTrigger,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog"
import Table from '@/components/ui/table';
import { tables } from "../../Data/tables"

export default function Cart({ cart, updateCartItemQuantity, deleteCartItem }) {

  const subTotal = cart.reduce((acc, item) => acc + item.basePrice * item.quantity, 0)
  const tax = subTotal * 0.10;
  const discount = subTotal * 0.15;
  const total = subTotal + tax - discount;
  const [paymentMethod, setPaymentMethod] = useState('CASH')
  const [open, setOpen] = useState(false)
  const [customerName, setCustomerName] = useState('')
  const [customerPhone, setCustomerPhone] = useState(null)
  const [selectedTable, setSelectedTable] = useState('')

  const items = [
    { label: "CASH", value: "CASH" },
    { label: "CARD", value: "CARD" },
    { label: "QR", value: "QR" },
  ]



  const selectTable = (table) => {
    if (table.status == "Booked") {
      alert(`table is already booked`)
    }
    else {
      setSelectedTable(table)
    }
  }

  const placeOrder = () => {
    if (!customerName || !selectedTable || !customerPhone) {
      alert("Please enter customer name, Phone and select a table!");
      return;
    }

    if (cart.length == 0) {
      alert("please add items in the cart")
    }
    else {
      const orderDetails = {
        customerName,
        customerPhone,
        selectedTable,
        cartItems: cart,
        totalPrice: total,
        paymentMethod,
      };
  
      console.log("Order Placed:", orderDetails);
      alert("Order placed successfully!");
      cart.forEach(item => deleteCartItem(item.categoryID))
      setCustomerName('') 
      setCustomerPhone(null)
      setSelectedTable('')
    }
  };

  return (
    <>
      <Box p={5}>

        <Box>
          <VStack>
            <HStack>
              <Input type='text' name='name' placeholder="Customer Name" value={customerName} onChange={(e) => setCustomerName(e.target.value)}></Input>
              <Input type="number" placeholder="+88" onChange={(e)=>setCustomerPhone(e.target.value)}></Input>
            </HStack>
            <HStack w="100%">

              <DialogRoot scrollBehavior='inside' size="cover" placement="center" lazyMount open={open} onOpenChange={(e) => setOpen(e.open)}>
                <DialogTrigger asChild>
                  <Button visual="outline" size='sm' display='flex' justifyContent='center' alignItems='center' cursor='pointer'>
                    <IoMdAdd /> Table
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Add Table</DialogTitle>
                  </DialogHeader>
                  <DialogBody>
                    <Box width='100%' height="80vh" overflowY="auto">
                      <Grid templateColumns="repeat(5, 1fr)" gap={2}>
                        {
                          tables.length > 0 ? (tables.map((item) =>
                            <Table
                              key={item.id}
                              title={item.title}
                              status={item.status}
                              icon={item.image}
                              seats={item.seats}
                              onSelect={() => selectTable(item)}
                            />)) : <Text>No items available</Text>
                        }
                      </Grid>
                    </Box>
                  </DialogBody>
                  <DialogFooter>
                    <DialogTitle>{`${selectedTable.title} selected`}</DialogTitle>
                    <DialogActionTrigger asChild>
                      <Button visual="outline" >Cancel</Button>
                    </DialogActionTrigger>
                    <Button visual="solid" onClick={()=>{
                      if(selectTable){
                        setOpen(false)
                      }
                      else {
                        alert("please select a table first")
                      }
                    }}   >Save</Button>
                  </DialogFooter>
                  <DialogCloseTrigger />
                </DialogContent>
              </DialogRoot>
            </HStack>
          </VStack>
        </Box>

        <Heading pb={2}>
          Cart Details
        </Heading>

        <Box h='100px' overflow='auto'>
          {cart.length === 0 ? (
            <Text>No items in cart</Text>

          ) : (
            cart.map(item => (
              <HStack key={item.id} justifyContent='space-between' py={1} >
                <HStack>
                  <Image width="60px" height="50px" borderRadius='10px' src={item.image} aspectRatio={4 / 3} fit="cover" alt={item.title} />
                  <VStack alignItems='flex-start'>
                    <Text fontSize="14px">{item.title}</Text>
                    <HStack borderWidth='1px' borderRadius='7px'>
                      <Button lineHeight={0} p={1} variant='outline' size="xs" onClick={() => updateCartItemQuantity(item.categoryID, -1)}>-</Button>
                      <Text fontSize='12px'>{item.quantity}</Text>
                      <Button p={1} lineHeight={0} variant='outline' borderRadius='7px' size="xs" onClick={() => updateCartItemQuantity(item.categoryID, 1)}>+</Button>
                    </HStack>
                  </VStack>
                </HStack>

                <VStack alignItems='flex-end'>
                  <IconButton size='xs' variant='outline' onClick={() => deleteCartItem(item.categoryID)}>
                    <MdOutlineDeleteOutline color='#fe4949' size='18px' />
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
            <RadioGroup.Root defaultValue={paymentMethod} onValueChange={(e) => setPaymentMethod(e.value)}>
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
            Invoice
          </Button>

          <Button onClick={placeOrder} cursor='pointer' display='flex' justifyContent='center' alignItems='center' visual="solid">
            Place Order 
          </Button>
        </HStack>
      </Box>
    </>
  )
}
