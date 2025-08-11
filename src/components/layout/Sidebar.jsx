import React from 'react'
import { Image,Flex,Box,Heading,VStack} from '@chakra-ui/react'
import logo from '../../assets/images/logo.svg'
import DashboardIcons from '../../assets/icons/dashboard.svg'
import Tables from '../../assets/icons/tables.svg'
import Menu from '../../assets/icons/menu.svg'
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import Orders from '../../assets//icons/orders.svg'
export default function Sidebar() {

  // Style for the active link
  const linkStyle = ({ isActive }) => ({
    backgroundColor: isActive ? "#e6e6e6" : "transparent",
    color: isActive ? "#000000" : "#5E5E5E",
    textDecoration: "none",
    display: "flex",
    alignItems: "center",
    gap: "8px",
    width: "100%",
    padding: "12px 0 12px 20px",
    borderRadius: "10px",
    transition: "background 0.2s ease-in-out"
  })

  return (
    <>
      <Box borderRight="1px solid" borderRightColor='#e7e7e7' bg='#fff' height="100vh">
        <Flex justifyContent="space-between" alignItems='center' padding='10px'>
          <Link to="/">
            <Image src={logo} alt="logo"/>
          </Link>
          {/* <MdMenu size='2em'/> */}
        </Flex>

        <Box h="1px" bg="#e1e1e1" w="100%" my={4} />  

        <Box p={5} gap={5}>
          <Heading pb={5} size='sm' fontSize='15px' fontWeight="400" color="#6E7784">
            MAIN MENU
          </Heading>
          <VStack alignItems='flex-start' w="100%">
            <NavLink to="/" style={linkStyle}>
            <Image src={DashboardIcons} boxSize="20px"/> 
            Dashboard
          </NavLink>

            <NavLink to="/tables" style={linkStyle}>
            <Image src={Tables} boxSize="20px"/> 
            Tables
          </NavLink>

          <NavLink to="/foodMenus" style={linkStyle}>
            <Image src={Menu} boxSize="20px"/> 
            Menu
          </NavLink>

          <NavLink to="/orders" style={linkStyle}>
            <Image src={Orders} boxSize="20px"/> 
            Orders
          </NavLink>

          </VStack>
        </Box>


      </Box>
    </>
  )
}
