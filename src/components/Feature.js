// src/components/Feature.js
import React from 'react';
import { Box, Heading, Text, Flex } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

const Feature = ({ title, description, imageComponent, index }) => {
  return (
    <Flex
      direction={{ base: 'column', md: index % 2 === 0 ? 'row' : 'row-reverse' }}
      align="center"
      justify="space-between"
    >
      {/* Image */}
      <MotionBox
        flex="1"
        mb={{ base: 8, md: 0 }}
        mr={{ md: index % 2 === 0 ? 8 : 0 }}
        ml={{ md: index % 2 !== 0 ? 8 : 0 }}
        maxW={{ base: '100%', md: '50%' }}
        initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        {imageComponent}
      </MotionBox>

      {/* Text Content */}
      <MotionBox
        flex="1"
        maxW={{ base: '100%', md: '50%' }}
        initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <Heading as="h3" size="lg" mb={4} color="brand.700">
          {title}
        </Heading>
        <Text fontSize="lg" color="gray.600">
          {description}
        </Text>
      </MotionBox>
    </Flex>
  );
};

export default Feature;