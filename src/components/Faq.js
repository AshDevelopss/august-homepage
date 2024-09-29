// src/components/FAQs.js
import React from 'react';
import { Box, Heading, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Text } from '@chakra-ui/react';

const faqs = [
  {
    question: 'Is my information secure?',
    answer: 'Yes, we prioritize your privacy and ensure all data is securely handled.',
  },
  {
    question: 'Does August provide medical diagnoses?',
    answer: 'No, August offers guidance on which specialist to consult but does not provide medical diagnoses.',
  },
  // Add more FAQs as needed
];

const FAQs = () => (
  <Box id="faqs" py={{ base: 10, md: 20 }} px={8}>
    <Heading as="h2" size="xl" textAlign="center" mb={10}>
      Frequently Asked Questions
    </Heading>
    <Accordion allowToggle maxW="800px" mx="auto">
      {faqs.map((faq, index) => (
        <AccordionItem key={index}>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left" fontWeight="bold">
                {faq.question}
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            {faq.answer}
          </AccordionPanel>
        </AccordionItem>
      ))}
    </Accordion>
  </Box>
);

export default FAQs;