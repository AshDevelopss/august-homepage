// src/components/HeroSection.js
import React from 'react';
import { Box, Heading, Text, Button, Stack, Image } from '@chakra-ui/react';
import HeroQR from '../images/qr_code.avif';


const HeroSection = () => (
  <Box bg="brand.50" py={{ base: 10, md: 20 }} px={8}>
    <Stack spacing={6} align="center" textAlign="center">
      <Heading
        as="h1"
        size="2xl"
        fontWeight="bold"
        color="brand.700"
        maxW="800px"
      >
        Understand Your Health Better with August
      </Heading>
      <Text color="gray.600" maxW="600px" fontSize="lg">
        Describe your symptoms to August and get guidance on the right medical specialist to consult.
      </Text>
      <Button
        colorScheme="brand"
        size="lg"
        as="a"
        href="/start-chat"
      >
        Start Chatting Now
      </Button>
      {/* Hero Image */}
      <Image
        src={HeroQR}
        alt="Chatting with August"
        maxW="500px"
        mt={8}
      />
    </Stack>
  </Box>
);

export default HeroSection;