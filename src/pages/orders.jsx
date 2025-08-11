import React, {useState} from 'react'
import { Box, HStack, Input, Table, Text, Heading} from '@chakra-ui/react'
import { InputGroup } from "@/components/ui/input-group"
import { LuSearch } from 'react-icons/lu'
import { Avatar } from "@chakra-ui/react"
import {orders}  from '../Data/orders.js'

export default function Orders() {

    const [inputValue, setInputValue] = useState('')
    const [order, setOrder] = useState(orders)    
    
    const handleInput = (e)=> {
      const value = e.target.value.toLowerCase().trim();
      setInputValue(value);
      const filtered = orders.filter(item => item.id === parseInt(value) || item.name.toLowerCase().includes(value.toLowerCase()));
      setOrder(filtered)
      console.log(filtered)
  }

  return (
    <Box>
      <HStack gap="10" width="100%" p={5} >
        <Heading style={{ fontWeight: "400" }}>
                  Orders
          </Heading>
        <InputGroup
          flex="1"
          startElement={<LuSearch />}
        >
          <Input onChange={handleInput} value={inputValue} placeholder="Search Orders By Name or ID" bg='#FDFDFD' border="1px solid #E3E3E3" p={5} borderRadius={100} />
        </InputGroup>
      </HStack>


    <Box px={5}>
      <Table.ScrollArea borderWidth="1px" rounded="md" height="600px">
          <Table.Root size="sm" stickyHeader>
            <Table.Header>
              <Table.Row bg="bg.subtle">
                <Table.ColumnHeader>Name</Table.ColumnHeader>
                <Table.ColumnHeader>Date</Table.ColumnHeader>
                <Table.ColumnHeader>Phone</Table.ColumnHeader>
                <Table.ColumnHeader>Table</Table.ColumnHeader>
                <Table.ColumnHeader>Order ID</Table.ColumnHeader>
                <Table.ColumnHeader>Amount</Table.ColumnHeader>
                <Table.ColumnHeader textAlign="end">Status</Table.ColumnHeader>
              </Table.Row>
            </Table.Header>
    
            <Table.Body>
              {order.map((item) => (
                <Table.Row key={item.id} _hover={{ bg: "gray.50" }}>
                  <Table.Cell>  
                    <HStack spacing={3}>
                        <Avatar.Root>
                        <Avatar.Fallback name={item.name} />
                        <Avatar.Image src="/" />
                        </Avatar.Root>
                      <Text>{item.name}</Text>
                    </HStack></Table.Cell>
                  <Table.Cell>{item.date}</Table.Cell>
                  <Table.Cell>{item.phone}</Table.Cell>
                  <Table.Cell>{item.table}</Table.Cell>
                  <Table.Cell>{item.orderId}</Table.Cell>
                  <Table.Cell>{`$${item.amount}`}</Table.Cell>
                  <Table.Cell fontWeight="bold" color={'green.500'} textAlign="end">{item.status}</Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table.Root>
        </Table.ScrollArea>
    </Box>

    </Box>
  )
}
