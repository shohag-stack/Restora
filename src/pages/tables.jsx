import React, {useState} from 'react'
import { Box, HStack, Separator, Flex, Text, Input, Grid, VStack } from '@chakra-ui/react'
import { Button } from '@chakra-ui/react'
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
} from "../components/ui/dialog"
import Table from '@/components/ui/table';
import {
  FileUploadList,
  FileUploadRoot,
  FileUploadTrigger,
} from "../components/ui/file-upload"
import { HiUpload } from 'react-icons/hi';
import {tables} from "../Data/tables"


export default function Tables() {
  const [open, setOpen] = useState(false)
  const [formData,setFormData] = useState("")
  const [seats,setSeats] = useState("")

  const handleMenuSubmit = () => {
    console.log(formData)
    if (!formData) {
      alert("Please enter a table name")
      return
    }

    const newTable = {
      id: tables.length + 1,
      title: formData,
      status: "available",
      image: "",
      seats: 2,
    }
    tables.push(newTable)
    setFormData("")
    setOpen(false)
  }

  const deleteItem =()=>{

  }

    return (
      <>
            <Box w='100%' p={5} pb={2} >
              <HStack justifyContent='space-between'>
                <HStack>
                  <h2 style={{ fontWeight: "400" }}>
                    Tables
                  </h2>
                  <Separator orientation="vertical" width='2px' height="30px" bg='#eeeeee' />
                  <Text color='#F54D2C'>
                    {tables.length} Table
                  </Text>
                  <DialogRoot lazyMount open={open} onOpenChange={(e) => setOpen(e.open)}>
                    <DialogTrigger asChild>
                      <Button visual="outline" size='sm' display='flex' justifyContent='center' alignItems='center' cursor='pointer'>
                        <IoMdAdd /> Add Table
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Add Table</DialogTitle>
                      </DialogHeader>
                      <DialogBody>
                        <VStack gap={1}>
                          <Input placeholder='Table Name' type='text' value={formData} onChange={(e) => setFormData(e.target.value)} />
                          <Input placeholder='seats' type="number" value={seats} onChange={(e) => setSeats(e.target.value)} />
                          <FileUploadRoot>
                            <FileUploadTrigger>
                              <Button visual="outline" size='sm' display='flex' justifyContent='center' alignItems='center'>
                                <HiUpload /> Add icon
                              </Button>
                            </FileUploadTrigger>
                            <FileUploadList />
                          </FileUploadRoot>
                        </VStack>
                      </DialogBody>
                      <DialogFooter>
                        <DialogActionTrigger asChild>
                          <Button visual="outline" >Cancel</Button>
                        </DialogActionTrigger>
                        <Button visual="solid" onClick={handleMenuSubmit} >Save</Button>
                      </DialogFooter>
                      <DialogCloseTrigger />
                    </DialogContent>
                  </DialogRoot>
                </HStack>
              </HStack>
            </Box>
  
            <Box width='100%' height="78vh" overflowY="auto" pr={5} pl={5}>
              <Grid templateColumns="repeat(5, 1fr)" gap={2}>
                {
                  tables.length > 0 ? (tables.map((item) =>
                    <Table
                      key={item.id}
                      title={item.title}
                      status={item.status}
                      icon={item.image}
                      seats = {item.seats}
                      onDeleteItems = {()=> deleteItem(item.categoryID)}
                      onAddToCart = {()=> addToCart(item)}
                      />)) : <Text>No items available</Text>
                }
              </Grid>
            </Box>
  
      </>
    )
}
