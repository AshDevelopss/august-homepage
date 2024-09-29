// src/@chakra-ui/gatsby-plugin/theme.js
import { extendTheme } from '@chakra-ui/react';
import '@fontsource/open-sans/400.css'; // Import weights and styles as needed
import '@fontsource/raleway/700.css';


const customTheme = extendTheme({
  colors: {
    brand: {
        50: '#e6f3ee',
        100: '#c1e0d3',
        200: '#9bceb8',
        300: '#75bb9d',
        400: '#4fa982',
        500: '#206d55', // Primary color
        600: '#1a5744',
        700: '#144133',
        800: '#0e2b22',
        900: '#081511',
    },
  },
  fonts: {
    heading: 'Raleway, sans-serif',
    body: 'Open Sans, sans-serif',
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: 'bold',
        borderRadius: 'md',
      },
      sizes: {
        md: {
          fontSize: 'md',
          px: 6,
          py: 4,
        },
      },
      variants: {
        solid: {
          bg: 'brand.500',
          color: 'white',
          _hover: {
            bg: 'brand.600',
          },
        },
      },
      defaultProps: {
        colorScheme: 'brand',
      },
    },
    Link: {
        baseStyle: {
          color: '#fff',
          _hover: {
            textDecoration: 'underline',
            color: 'brand.700',
          },
        },
      },
  },
});

export default customTheme;