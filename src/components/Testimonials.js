import React from 'react';
import {
  Box,
  Heading,
  Text,
  Stack,
  Avatar,
  useColorModeValue,
  SimpleGrid,
} from '@chakra-ui/react';

const testimonials = [
  {
    name: 'John Doe',
    feedback:
      'August helped me understand my symptoms in a way that was easy and reassuring. Highly recommend!',
    avatar: '/images/users/john_doe.jpg',
  },
  {
    name: 'Jane Smith',
    feedback:
      'I was unsure about which doctor to consult, but August guided me in the right direction.',
    avatar: '/images/users/jane_smith.jpg',
  },
  {
    name: 'Michael Johnson',
    feedback:
      'The chatbot was so friendly and helpful. It made the whole process stress-free.',
    avatar: '/images/users/michael_johnson.jpg',
  },
  // Add more testimonials as needed
];

const TestimonialCard = ({ name, feedback, avatar }) => {
  return (
    <Box
      bg={useColorModeValue('white', 'gray.800')}
      boxShadow="lg"
      borderRadius="md"
      p={6}
      m={2}
    >
      <Stack direction="row" spacing={4} align="center" mb={4}>
        <Avatar src={avatar} name={name} />
        <Text fontWeight="bold">{name}</Text>
      </Stack>
      <Text color="gray.600" fontSize="md">
        "{feedback}"
      </Text>
    </Box>
  );
};

const Testimonials = () => {
  return (
    <Box id="testimonials" py={{ base: 10, md: 20 }} px={8}>
      <Heading as="h2" size="xl" textAlign="center" mb={10}>
        Testimonials
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
        {testimonials.map((testimonial, index) => (
          <TestimonialCard
            key={index}
            name={testimonial.name}
            feedback={testimonial.feedback}
            avatar={testimonial.avatar}
          />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Testimonials;