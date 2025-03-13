import React from 'react'
import Sidebar from './Sidebar'
import Header from './Header';
import { Outlet } from 'react-router-dom';
import { Box,Grid,GridItem } from '@chakra-ui/react';

export default function MainLayout() {
  return (
    <>
        <Box w="100%" bg="#F9F9F9" height="100vh" overflow='hidden'>
            <Grid
            templateColumns="repeat(6, 1fr)" gap="4"
            >
                <GridItem colSpan={1}>
                    <Sidebar/>
                </GridItem>
                <GridItem colSpan={5}>
                    <Header/>
                    <Outlet/>
                </GridItem>
            </Grid>
        </Box>
    </>
  )
}
