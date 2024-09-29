// src/components/HowItWorks.js
import React from 'react';
import { Box, Heading, Stack, useColorModeValue } from '@chakra-ui/react';
import Feature from './Feature';
import { StaticImage } from 'gatsby-plugin-image';

const HowItWorks = () => {
  const bg = useColorModeValue('gray.50', 'gray.800');

  return (
    <Box id="howitworks" bg={bg} py={{ base: 10, md: 20 }} px={8}>
      <Heading as="h2" size="xl" textAlign="center" mb={16}>
        How It Works
      </Heading>
      <Stack spacing={16}>
        <Feature
          title="Get Direct Answers"
          description="Get direct answers to your complicated health questions directly from August."
          imageComponent={
            <StaticImage
              src="../images/direct_answers.avif"
              alt="Direct Answers Illustration"
              placeholder="blurred"
              layout="constrained"
              width={600}
              quality={90}
              style={{ borderRadius: '8px' }}
            />
          }
          index={0}
        />
        <Feature
          title="Provide Medical History and Lab Reports"
          description="Simply send a lab report to August over WhatsApp, and it will take it into account while giving you answers. August also provides clear explanations for your queries."
          imageComponent={
            <StaticImage
              src="../images/lab_reports.avif"
              alt="Lab Report Illustration"
              placeholder="blurred"
              layout="constrained"
              width={400}
              quality={90}
              style={{ borderRadius: '8px' }}
            />
          }
          index={1}
        />
        <Feature
          title="Analyze Photos for Smarter Advice"
          description="August can analyze the images you send via WhatsApp and provide smarter, more tailored advice."
          imageComponent={
            <StaticImage
              src="../images/photograph.avif"
              alt="Photo Analysis Illustration"
              placeholder="blurred"
              layout="constrained"
              width={400}
              quality={90}
              style={{ borderRadius: '8px' }}
            />
          }
          index={2}
        />
        <Feature
          title="Care and Check-in"
          description="August proactively checks in on you from time to time to monitor your progress."
          imageComponent={
            <StaticImage
              src="../images/checkin.avif"
              alt="Care and Check-in Illustration"
              placeholder="blurred"
              layout="constrained"
              width={400}
              quality={90}
              style={{ borderRadius: '8px' }}
            />
          }
          index={3}
        />
      </Stack>
    </Box>
  );
};

export default HowItWorks;