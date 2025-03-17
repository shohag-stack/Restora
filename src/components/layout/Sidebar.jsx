import React from 'react'
import { Image,Flex,Box,Heading,VStack} from '@chakra-ui/react'
import logo from '../../assets/images/logo.svg'
import { MdMenu } from "react-icons/md";
import { IoMdAdd } from "react-icons/io";
import { Button } from '../../components/ui/button';
import DashboardIcons from '../../assets/icons/dashboard.svg'
import Tables from '../../assets/icons/tables.svg'
import Menu from '../../assets/icons/menu.svg'
import { Link } from 'react-router-dom';
export default function Sidebar() {
  return (
    <>
      <Box borderRight="1px solid" borderRightColor='#e7e7e7' bg='#fff' height="100vh">
        <Flex justifyContent="space-between" alignItems='center' padding='10px'>
          <Link to="/">
            <Image src={logo} alt="logo"/>
          </Link>
          <MdMenu size='2em'/>
        </Flex>

        <Box h="1px" bg="#e1e1e1" w="100%" my={4} />  

        <Box p={5} gap={5}>
          <Heading pb={5} size='sm' fontSize='15px' fontWeight="400" color="#6E7784">
            MAIN MENU
          </Heading>
          <VStack alignItems='flex-start' w="100%">
            <Box 
              as={Link} 
              to="/" 
              _hover={{ bg: "#e6e6e6", color: "#000000" }} 
              textDecoration="none" 
              color="#5E5E5E" 
              display="flex" 
              alignItems="center" 
              gap="8px"
              w="100%"
              py={15}
              pl={5}
              borderRadius="10px"
              transition="background 0.2s ease-in-out"
            >
              <Image src={DashboardIcons} boxSize="20px"/> 
              Dashboard
            </Box>

            <Box 
              as={Link} 
              to="tables" 
              _hover={{ bg: "#e6e6e6", color: "#000000" }} 
              textDecoration="none" 
              color="#5E5E5E" 
              display="flex" 
              alignItems="center" 
              gap="8px"
              w="100%"
              py={15}
              pl={5}
              borderRadius="10px"
              transition="background 0.2s ease-in-out"
            >
              <Image src={Tables} boxSize="20px"/> 
              Tables
            </Box>

            <Box 
              as={Link} 
              to="menu" 
              _hover={{ bg: "#e6e6e6", color: "#000000" }} 
              textDecoration="none" 
              color="#5E5E5E" 
              display="flex" 
              alignItems="center" 
              gap="8px"
              w="100%"
              py={15}
              pl={5}
              borderRadius="10px"
              transition="background 0.2s ease-in-out"
            >
              <Image src={Menu} boxSize="20px"/> 
              Menu
            </Box>
          </VStack>
        </Box>
      </Box>
    </>
  )
}
