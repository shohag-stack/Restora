import React, { useEffect, useState } from 'react'
import { Image, Heading, Text, VStack, HStack } from '@chakra-ui/react';
import { MdShowChart } from "react-icons/md";

export default function OverViewCard({ src, heading, total, percentage, description, increase }) {
    const [state, setState] = useState(0);

    useEffect(() => {
        const duration = 300; // animation duration in ms
        const stepTime = Math.max(Math.floor(duration / total), 1); // ms between updates
        const increment = Math.max(Math.floor(total / (duration / stepTime)), 1);

        const interval = setInterval(() => {
            setState(prev => {
                if (prev >= total) {
                    clearInterval(interval);
                    return total;
                }
                return Math.min(prev + increment, total);
            });
        }, stepTime);

        return () => clearInterval(interval);
    }, [total]);



    return (
        <VStack alignItems={"flex-start"} gap={2} border={"1px solid #E3E3E3"} p={5} borderRadius={10} bgColor="#FDFDFD">
            <HStack>
                <Image src={src} borderRadius={10} w='40px' h='40px' />
                <Heading size="lg">{heading}</Heading>
            </HStack>
            <HStack>
                <Heading size='4xl'>{`${state}`}</Heading>
                <Text borderRadius={20} bgColor='green.100' fontWeight='bold' color='green.600' fontSize='15px' px={2}>
                    {`+${percentage}`}
                </Text>
            </HStack>
            <HStack>
                <Text>{description}</Text>
                <HStack gap={0} px={2} borderRadius={20} bgColor='green.100'>
                    <MdShowChart color='#08AD1C' />
                    <Text fontSize='15px' fontWeight='bold' color='green.600'>{increase}</Text>
                </HStack>
            </HStack>
        </VStack>
    )
}