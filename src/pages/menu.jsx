import React, {useEffect} from 'react'
import { Box, HStack, Separator, Flex, Text, Input, Grid, GridItem, VStack } from '@chakra-ui/react'
import { Button } from '../components/ui/button'
import { IoMdAdd } from "react-icons/io";
import { InputGroup } from "@/components/ui/input-group"
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
import { useState } from "react"
import MenuCategory from '../components/ui/MenuCategory';
import { LuSearch } from "react-icons/lu"
import menuItemData from '@/Data/menuItemData';
import category from "../Data/menuData";
import MenuItem from '@/components/ui/MenuItem';
import {
  FileUploadList,
  FileUploadRoot,
  FileUploadTrigger,
} from "../components/ui/file-upload"
import { HiUpload } from 'react-icons/hi';
import Cart from '@/components/ui/Cart';

export default function Menu() {

  const [open, setOpen] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState(1)
  const [formData, setFormData] = useState('')
  const [cart,setCart] = useState([])
  const [menu,setMenu] = useState(menuItemData)
  const [menuData, setMenuData] = useState(category)
  const [inputValue,setInputValue] = useState('')
  const filteredItems = selectedCategory === 1 ? menu : menu.filter(item => item.categoryID === Number(selectedCategory));




  const handleMenuSubmit = () => {
    console.log(formData)
  }

  const handleInput = (e)=> {
    const value = e.target.value.toLowerCase().trim();
    setInputValue(value);
    const filtered = menuItemData.filter(item => item.title.toLowerCase().includes(value))
    setMenu(filtered)

  }


  const addToCart = (item)=> {
    setCart((prevCart)=>{
      const existingItem = prevCart.find( cartItem => cartItem.categoryID === item.categoryID)
      if (existingItem) {
        console.log(`existing item ${existingItem}`)
        return prevCart.map(cartItem => cartItem.categoryID === item.categoryID ? {...cartItem, quantity: cartItem.quantity + 1} : cartItem);
      }

      else {
        return [...prevCart, {...item, quantity: 1}];
      }
    })
  }


  const deleteItem = (id)=> {
    setMenu(prevMenu => prevMenu.filter(item => item.categoryID !== id))
    setCart(prevCart => prevCart.filter(item => item.categoryID !== id))
    setMenuData(prevMenu => prevMenu.map(item => item.id === id ? {...item, count: Math.max(0, item.count - 1)} : item))
    console.log("clicked")
  }


  const updateCartItemQuantity = (id, amount) => {
    setCart(prevCart => prevCart.map(item => 
      item.categoryID === id
        ? { ...item, quantity: Math.max(1, item.quantity + amount), price: item.basePrice * Math.max(1, item.quantity + amount)} 
        : item
    ));
  };

  const deleteCartItem = (id)=> {
    setCart(prevCart => prevCart.filter(item => item.categoryID !== id))

  }



  return (
    <>
      <Grid templateColumns='repeat(7,1fr)' gap={4}>
        <GridItem colSpan={cart.length > 0 ? 5 : 7} pr={cart.length > 0 ? 0 : 4}>
          <Box w='100%' >
            <Flex>
              <HStack>
                <h2 style={{ fontWeight: "400" }}>
                  Recipes
                </h2>
                <Separator orientation="vertical" width='2px' height="30px" bg='#eeeeee' />
                <Text color='#F54D2C'>
                  {filteredItems.length} Foods
                </Text>
                <DialogRoot lazyMount open={open} onOpenChange={(e) => setOpen(e.open)}>
                  <DialogTrigger asChild>
                    <Button visual="outline" size='sm' display='flex' justifyContent='center' alignItems='center' cursor='pointer'>
                      <IoMdAdd /> Add Recipe
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Create Recipe</DialogTitle>
                    </DialogHeader>
                    <DialogBody>
                      <VStack gap={1}>
                        <Input placeholder='Recipe Name' type='text' value={formData} onChange={(e) => setFormData(e.target.value)} />
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
            </Flex>
          </Box>

          <Box w='100%'>
            <Flex>
              <HStack gap={2}>
                {menuData.map((menu) => (
                  <MenuCategory setSelectedCategory={setSelectedCategory} id={menu.id} key={menu.id} title={menu.title} count={menu.count} icon={menu.icon} selectedCategory={selectedCategory} />
                ))}
              </HStack>
            </Flex>
          </Box>

          <HStack gap="10" width="100%" p={5} pl={0} pr={0} >
            <InputGroup
              flex="1"
              startElement={<LuSearch />}
            >
              <Input onChange={handleInput} value={inputValue} placeholder="Search Product By Name" bg='#FDFDFD' border="1px solid #E3E3E3" p={5} borderRadius={100} />
            </InputGroup>
          </HStack>

          <Box width='100%' height="60vh" overflowY="auto">
            <Grid templateColumns="repeat(5, 1fr)" gap={2}>
              {
                filteredItems.length > 0 ? (filteredItems.map((item) =>
                  <MenuItem
                    key={item.id}
                    title={item.title}
                    price={item.price}
                    image={item.image}
                    category={item.category}
                    onDeleteItems = {()=> deleteItem(item.categoryID)}
                    onAddToCart = {()=> addToCart(item)}
                    />)) : <Text>No items available</Text>
              }
            </Grid>
          </Box>
        </GridItem>
        {cart.length > 0 && (
            <GridItem colSpan={2}>
              <Box bg='#fff' height='100vh'>
                <Cart deleteCartItem={deleteCartItem} updateCartItemQuantity={updateCartItemQuantity} cart={cart} />
              </Box>
            </GridItem>
  )}
      </Grid>

    </>
  )
}
