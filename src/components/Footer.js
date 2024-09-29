// src/components/Footer.js
import React from 'react';
import {
  Box,
  Stack,
  Text,
  Link,
  Image,
  HStack,
  VStack,
  Divider,
} from '@chakra-ui/react';
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from 'react-icons/fa';
import AugustLogo from '../images/august_white_logo.svg';


const Footer = () => {
  return (
    <Box bg="brand.800" color="white" py={10}>
      <Box maxW="1200px" mx="auto" px={6}>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          spacing={10}
          justify="space-between"
        >
          {/* Logo and Description */}
          <VStack align="flex-start" spacing={4} flex="1">
            <Link href="/">
              <Image src={AugustLogo} alt="August Logo" h={8} />
            </Link>
            <Text fontSize="sm" color="gray.300">
              August is your personal health assistant, helping you understand your symptoms and guiding you to the right care.
            </Text>
          </VStack>

          {/* Navigation Links */}
          <VStack align="flex-start" spacing={2} flex="1">
            <Text fontWeight="bold" mb={2}>
              Quick Links
            </Text>
            <Link href="/" _hover={{ textDecoration: 'underline' }}>
              Home
            </Link>
            <Link href="#howitworks" _hover={{ textDecoration: 'underline' }}>
              How It Works
            </Link>
            <Link href="#features" _hover={{ textDecoration: 'underline' }}>
              Features
            </Link>
            <Link href="#aboutus" _hover={{ textDecoration: 'underline' }}>
              About Us
            </Link>
            <Link href="#faqs" _hover={{ textDecoration: 'underline' }}>
              FAQs
            </Link>
          </VStack>

          {/* Contact Information */}
          <VStack align="flex-start" spacing={2} flex="1">
            <Text fontWeight="bold" mb={2}>
              Contact Us
            </Text>
            <Text>
              Email:{' '}
              <Link
                href="mailto:support@meetaugust.ai"
                _hover={{ textDecoration: 'underline' }}
              >
                support@meetaugust.ai
              </Link>
            </Text>
            <Text>
              Phone:{' '}
              <Link
                href="tel:+1234567890"
                _hover={{ textDecoration: 'underline' }}
              >
                +1 (234) 567-890
              </Link>
            </Text>
            {/* Social Media Links */}
            <HStack spacing={4} mt={4}>
              <Link href="https://www.facebook.com/yourpage" isExternal>
                <FaFacebook size="24" />
              </Link>
              <Link href="https://twitter.com/yourprofile" isExternal>
                <FaTwitter size="24" />
              </Link>
              <Link href="https://www.instagram.com/yourprofile" isExternal>
                <FaInstagram size="24" />
              </Link>
              <Link href="https://www.linkedin.com/company/yourcompany" isExternal>
                <FaLinkedin size="24" />
              </Link>
            </HStack>
          </VStack>
        </Stack>

        <Divider my={6} borderColor="gray.600" />

        <Stack
          direction={{ base: 'column', md: 'row' }}
          justify="space-between"
          align="center"
        >
          {/* Legal Links */}
          <HStack spacing={4}>
            <Link href="/privacy-policy" _hover={{ textDecoration: 'underline' }}>
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" _hover={{ textDecoration: 'underline' }}>
              Terms of Service
            </Link>
          </HStack>

          {/* Copyright */}
          <Text fontSize="sm" color="gray.400">
            © {new Date().getFullYear()} August. All rights reserved.
          </Text>
        </Stack>
      </Box>
    </Box>
  );
};

export default Footer;