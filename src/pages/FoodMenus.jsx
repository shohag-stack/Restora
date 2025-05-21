import React, {useRef} from 'react'
import { Box, HStack, Separator, Flex, Text, Input, Grid, GridItem, Select,Portal,Dialog ,createListCollection} from '@chakra-ui/react'
import { Button } from '../components/ui/button'
import { IoMdAdd } from "react-icons/io";
import { InputGroup } from "@/components/ui/input-group"
import { useState } from "react"
import MenuCategory from '../components/ui/MenuCategory';
import { LuSearch } from "react-icons/lu"
import menuItemData from '@/Data/menuItemData';
import menuData from "../Data/menuData";
import MenuItem from '@/components/ui/MenuItem';
import {
  FileUploadList,
  FileUploadRoot,
  FileUploadTrigger,
} from "../components/ui/file-upload"
import { HiUpload } from 'react-icons/hi';
import Cart from '@/components/ui/Cart';

export default function FoodMenus() {

  const [open, setOpen] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState(1)
  const [cart,setCart] = useState([])
  const [menu,setMenu] = useState(menuItemData)
  const [inputValue,setInputValue] = useState('')
  const filteredItems = selectedCategory === 1 ? menu : menu.filter(item => item.categoryID === Number(selectedCategory));
 
  const contentRef = useRef(null)
  const [selectedMenu, setSelectedMenu] = useState("")
  const [menuName, setMenuName] = useState("")

  console.log(selectedMenu)

  const handleMenuSubmit = () => {
    if (!menuName || !selectedMenu) {
      alert("Please enter a Menu name and select a category")
      return
    }

    const newMenu = {
      id: menuItemData.length + 1,
      categoryID: selectedMenu.id,
      category: selectedMenu.label,
      title: menuName,
      basePrice: 0,
      price: 0,
      image: "https://placehold.co/100x100"  // Default placeholder image
    }
    
    menuItemData.push(newMenu)  // Update the menu state to reflect changes
    const updatedMenuData = menuData.map(item => item.id === selectedMenu.id ? {...item, count: (item.count || 0 ) +1} : item)
    Object.assign(menuData, updatedMenuData)
    setMenuName("")
    setSelectedMenu("")
    setOpen(false)  // Close the dialog after submission
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
      <Grid templateColumns='repeat(7,1fr)' gap={4} pl={5}>
        <GridItem colSpan={5}>
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
                <Dialog.Root lazyMount open={open} onOpenChange={(e) => setOpen(e.open)}>
                    <Dialog.Trigger asChild>
                      <Button visual="outline" size="sm">Add menu</Button>
                    </Dialog.Trigger>
                    <Portal>
                      <Dialog.Backdrop />
                      <Dialog.Positioner>
                        <Dialog.Content ref={contentRef}>
                          <Dialog.Header>
                            <Dialog.Title>Add New Menu</Dialog.Title>
                          </Dialog.Header>
                          <Dialog.Body pb="4" spaceY={4}>
                            <Input type="text" value={menuName} onChange={(e)=> setMenuName(e.target.value)} placeholder="Enter menu name" />
                                <Select.Root
                                collection={frameworks}
                                size="sm"
                                value={selectedMenu}
                                onValueChange={({ items: [selectedItem] }) => setSelectedMenu(selectedItem)}
                                >
                                  <Select.HiddenSelect />
                                  <Select.Label>Choose Food Category</Select.Label>
                                  <Select.Control>
                                    <Select.Trigger>
                                      <Select.ValueText placeholder="Select framework" />
                                    </Select.Trigger>
                                    <Select.IndicatorGroup>
                                      <Select.Indicator />
                                    </Select.IndicatorGroup>
                                  </Select.Control>
                                  <Portal container={contentRef}>
                                    <Select.Positioner>
                                      <Select.Content>
                                        {frameworks.items.map((item) => (
                                          <Select.Item item={item} key={item.value}>
                                            {item.label}
                                          </Select.Item>
                                        ))}
                                      </Select.Content>
                                    </Select.Positioner>
                                  </Portal>
                                </Select.Root>
                          </Dialog.Body>
                          <Dialog.Footer>
                            <Dialog.ActionTrigger asChild>
                              <Button visual="outline">Cancel</Button>
                            </Dialog.ActionTrigger>
                            <Button visual="solid" onClick={handleMenuSubmit}>Save</Button>
                          </Dialog.Footer>
                        </Dialog.Content>
                      </Dialog.Positioner>
                    </Portal>
                </Dialog.Root>
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
          {
            <GridItem colSpan={2}>
              <Box bg='#fff' height='100vh'>
                <Cart deleteCartItem={deleteCartItem} updateCartItemQuantity={updateCartItemQuantity} cart={cart} />
              </Box>
          </GridItem>
          }
      </Grid>
    </>
  )
}


const frameworks = createListCollection({
  items: menuData.map(item => ({
    id: item.id,
    label: item.title,
    value: item.id,
    categoryID: item.id,
  }))
})
