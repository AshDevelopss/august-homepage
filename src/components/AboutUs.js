// src/components/AboutUs.js
import React from 'react';
import { Box, Heading, Text, Stack, Image } from '@chakra-ui/react';

const AboutUs = () => (
  <Box id="aboutus" py={{ base: 10, md: 20 }} px={8}>
    <Heading as="h2" size="xl" textAlign="center" mb={10}>
      About Us
    </Heading>
    <Stack spacing={6} align="center">
      <Text color="gray.600" maxW="800px" fontSize="lg" textAlign="center">
        At August, our mission is to empower individuals to take control of their health by providing accessible and understandable health insights.
      </Text>
      {/* Team Image or Description */}
      <Image src="/team-image.jpg" alt="Our Team" maxW="600px" />
    </Stack>
  </Box>
);

export default AboutUs;