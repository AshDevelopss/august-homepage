// src/components/Navbar.js
import React from 'react';
import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  Button,
  useDisclosure,
  Stack,
  Image,
} from '@chakra-ui/react';
import AugustLogo from '../images/august_logo.svg';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

const Links = ['How It Works', 'Features', 'Testimonials', 'FAQs'];

const NavLink = ({ children }) => (
  <Link
    px={2}
    py={1}
    rounded="md"
    color="gray.700"
    _hover={{
      textDecoration: 'none',
      bg: 'brand.100',
      color: 'brand.600',
    }}
    href={`#${children.replace(/\s+/g, '').toLowerCase()}`}
  >
    {children}
  </Link>
);

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box bg="white" px={4} shadow="md">
      <Flex h={16} alignItems="center" justifyContent="space-between">
        {/* Logo */}
        <Box>
          <Link href="/">
            <Image src={AugustLogo} alt="August Logo" h={8} />

          </Link>
        </Box>

        {/* Desktop Navigation */}
        <HStack as="nav" spacing={4} display={{ base: 'none', md: 'flex' }}>
          {Links.map((link) => (
            <NavLink key={link}>{link}</NavLink>
          ))}
        </HStack>

        {/* Chat Now Button */}
        <Button
          as="a"
          href="/start-chat"
          colorScheme="brand"
          variant="solid"
          size="md"
          ml={4}
          display={{ base: 'none', md: 'inline-flex' }}
        >
          Chat Now
        </Button>

        {/* Mobile Menu Button */}
        <IconButton
          size="md"
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label="Toggle Menu"
          display={{ md: 'none' }}
          onClick={isOpen ? onClose : onOpen}
        />
      </Flex>

      {/* Mobile Navigation */}
      {isOpen ? (
        <Box pb={4} display={{ md: 'none' }}>
          <Stack as="nav" spacing={4}>
            {Links.map((link) => (
              <NavLink key={link}>{link}</NavLink>
            ))}
            <Button
              as="a"
              href="/start-chat"
              colorScheme="brand"
              variant="solid"
            >
              Chat Now
            </Button>
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
};

export default Navbar;