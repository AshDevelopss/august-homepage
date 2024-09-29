// src/components/FeaturesSection.js
import React from 'react';
import { Box, Heading, SimpleGrid, Text, Stack, Icon } from '@chakra-ui/react';
import { FaHeartbeat, FaUserMd, FaShieldAlt, FaClock } from 'react-icons/fa';

const features = [
  {
    icon: FaHeartbeat,
    title: 'Symptom Analysis',
    description: 'Input your symptoms and receive understandable insights.',
  },
  {
    icon: FaUserMd,
    title: 'Department Recommendations',
    description: 'Discover which medical specialty can address your concerns.',
  },
  {
    icon: FaShieldAlt,
    title: 'Confidential and Secure',
    description: 'Your health information is kept private and secure.',
  },
  {
    icon: FaClock,
    title: '24/7 Availability',
    description: 'Access August anytime you need assistance.',
  },
];

const FeaturesSection = () => (
  <Box id="features" py={{ base: 10, md: 20 }} px={8}>
    <Heading as="h2" size="xl" textAlign="center" mb={10}>
      Features
    </Heading>
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
      {features.map((feature) => (
        <Stack key={feature.title} align="center">
          <Icon as={feature.icon} w={10} h={10} color="brand.500" />
          <Text fontWeight="bold" fontSize="lg">
            {feature.title}
          </Text>
          <Text color="gray.600" textAlign="center">
            {feature.description}
          </Text>
        </Stack>
      ))}
    </SimpleGrid>
  </Box>
);

export default FeaturesSection;