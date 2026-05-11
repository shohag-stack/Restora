import { useEffect, useState } from 'react'
import {
  Box,
  Flex,
  Link,
  Image,
  Text,
} from '@chakra-ui/react'

const slides = [
  {
    bg: 'https://res.cloudinary.com/dq9ckspti/image/upload/v1777533939/coverjpg_uf6mej.jpg',
    type: 'logo',
  },
  {
    bg: 'https://res.cloudinary.com/dq9ckspti/image/upload/v1777533939/coverjpg_uf6mej.jpg',
    type: 'text',
    text: 'Premium Next.js Templates',
  },
]

export default function RaysoCta() {
  const [index, setIndex] = useState(0)
  const [hovered, setHovered] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <Flex
      position="fixed"
      right="32px"
      bottom="32px"
      zIndex={40}
      flexDirection="column"
      gap={4}
    >
      {/* Slider */}
      <Box
        position="relative"
        width="150px"
        height="80px"
        overflow="hidden"
        borderRadius="16px"
      >
        <Box
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          style={{
            transform: `translateY(-${index * 100}%)`,
            transition: 'transform 700ms ease-in-out',
          }}
        >
          {slides.map((slide, i) => (
            <Flex
              key={i}
              position="absolute"
              top={`${i * 100}%`}
              left={0}
              right={0}
              width="100%"
              height="80px"
              justify="center"
              align="center"
            >
              {/* BG Image */}
              <Image
                src={slide.bg}
                alt=""
                position="absolute"
                top={0}
                left={0}
                width="100%"
                height="100%"
                objectFit="cover"
              />

              {/* Overlay */}
              <Box
                position="absolute"
                top={0}
                left={0}
                right={0}
                bottom={0}
                bg="rgba(23, 37, 84, 0.6)"
                zIndex={1}
              />

              {/* Content */}
              <Flex
                position="relative"
                zIndex={2}
                color="white"
                justify="center"
                align="center"
                width="100%"
              >
                {slide.type === 'logo' ? (
                  <Image
                    src="https://res.cloudinary.com/dq9ckspti/image/upload/v1777534388/rayso-logo_fgdmli.png"
                    alt="rayso-logo"
                    width="66%"
                  />
                ) : (
                  <Text
                    fontSize="20px"
                    fontWeight="bold"
                    px={4}
                    lineHeight="1"
                    textAlign="center"
                  >
                    {slide.text}
                  </Text>
                )}
              </Flex>
            </Flex>
          ))}
        </Box>
      </Box>

      {/* CTA Button */}
      <Link
        href="https://www.rayso.studio/templates/"
        isExternal
        display="flex"
        justifyContent="center"
        alignItems="center"
        px={4}
        py={2}
        borderRadius="full"
        fontWeight="bold"
        fontSize="14px"
        color="gray.900"
        bg="#a3e635"
        textDecoration="none"
        overflow="hidden"
        height="36px"
        _hover={{ textDecoration: 'none', bg: '#84cc16' }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <Box height="1.4em" overflow="hidden">
          <Flex
            flexDirection="column"
            style={{
              transform: hovered ? 'translateY(-50%)' : 'translateY(0)',
              transition: 'transform 300ms ease-out',
            }}
          >
            <Flex align="center" justify="center" height="1.4em">
              Browse Templates
            </Flex>
            <Flex align="center" justify="center" height="1.4em">
              Browse Templates
            </Flex>
          </Flex>
        </Box>
      </Link>
    </Flex>
  )
}