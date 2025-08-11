import { Box } from '@chakra-ui/react'
import React from 'react'
import { Heading, Grid, GridItem, Text } from '@chakra-ui/react';
import OverViewCard from './OverViewCard';
import OfferSideBar from './OfferSideBar';
import RecentOrders from './RecentOrders';
import food from '../../../public/assets/food.png';
import order from '../../../public/assets/order.png';
import sale from '../../../public/assets/sales.png';


export default function OverView() {
  return (
    <Box p={4}>
      <Heading>Overview</Heading>
      <Grid templateColumns='repeat(4, 1fr)' gap={6} mt={4}>
        <GridItem colSpan={3} borderRadius="md">
            <Grid templateColumns='repeat(3, 1fr)' gap={6}>
                <GridItem><OverViewCard src={food} heading="Total Food Item" total={1456} percentage={+115} description="Total Sales increased by 15% in last 7 days" increase='25%' /></GridItem>
                <GridItem><OverViewCard src={order} heading="Total Order" total={400} percentage={+115} description="Total Sales increased by 15% in last 7 days" increase='25%' /></GridItem>
                <GridItem><OverViewCard src={sale} heading="Total Revenue" total={4500} percentage={+115} description="Total Sales increased by 15% in last 7 days" increase='25%' /></GridItem>
                
            </Grid>
            <Grid>
              <GridItem>
                <Box mt={6} p={4} bg="white" borderRadius="md" boxShadow="md">
                  <Heading size="md" mb={4}>Recent Orders</Heading>
                  <RecentOrders />
                </Box>
              </GridItem>
            </Grid>
        </GridItem>

        <GridItem colSpan={1} borderRadius="md">
            <OfferSideBar/>
        </GridItem>
      </Grid>
    </Box>
  )
}
