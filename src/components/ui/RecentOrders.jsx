import { Table, Text, HStack } from "@chakra-ui/react"
import { Avatar } from "@chakra-ui/react"
import {items} from '../../Data/orders.js'

 const RecentOrders = () => {
  return (
    <Table.ScrollArea borderWidth="1px" rounded="md" height="300px">
      <Table.Root size="sm" stickyHeader>
        <Table.Header>
          <Table.Row bg="bg.subtle">
            <Table.ColumnHeader>Name</Table.ColumnHeader>
            <Table.ColumnHeader>Date</Table.ColumnHeader>
            <Table.ColumnHeader>Phone</Table.ColumnHeader>
            <Table.ColumnHeader>Table</Table.ColumnHeader>
            <Table.ColumnHeader>Order ID</Table.ColumnHeader>
            <Table.ColumnHeader textAlign="end">Status</Table.ColumnHeader>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {items.map((item) => (
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
              <Table.Cell fontWeight="bold" color={'green.500'} textAlign="end">{item.status}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </Table.ScrollArea>
  )
}

export default RecentOrders

