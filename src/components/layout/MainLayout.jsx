import React from 'react'
import Sidebar from './Sidebar'
import Header from './Header';
import { Outlet, useLocation } from 'react-router-dom';
import { Box,Grid,GridItem } from '@chakra-ui/react';
import Greetings from '../ui/Greetings';

export default function MainLayout() {
    const location = useLocation();
    const isDashboard = location.pathname === '/';
  return (
    <>
        <Box w="100%" bg="#F9F9F9" height="100vh" overflow='hidden'>
            <Grid
            templateColumns="repeat(6, 1fr)"
            >
                <GridItem colSpan={1}>
                    <Sidebar/>
                </GridItem>
                <GridItem colSpan={5} display="flex" flexDirection="column" height="100vh">
                    {!isDashboard && <Header />}
                    <Box flex="1" overflowY="auto">
                        <Outlet />
            </Box>
            </GridItem>
            </Grid>
        </Box>
    </>
  )
}
