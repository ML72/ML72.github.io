import { Container, Box, Stack } from '@mui/material';
import { SectionTitle } from '../components/SectionTitle';
import { EducationCard } from '../components/EducationCard';
import { education } from '../data/portfolioData';

export const Education = () => {
  return (
    <Box sx={{ py: 10, backgroundColor: 'background.default' }}>
      <Container maxWidth="lg">
        <SectionTitle
          title="Education"
          subtitle="My academic journey in computer science and research"
        />
        <Stack spacing={3}>
          {education.map((edu, index) => (
            <EducationCard key={index} education={edu} />
          ))}
        </Stack>
      </Container>
    </Box>
  );
};
