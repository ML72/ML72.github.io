import { Container, Box, Stack } from '@mui/material';
import { SectionTitle } from '../components/SectionTitle';
import { WorkCard } from '../components/WorkCard';
import { workExperience } from '../data/portfolioData';

export const WorkExperience = () => {
  return (
    <Box sx={{ py: 10, backgroundColor: 'background.default' }}>
      <Container maxWidth="lg">
        <SectionTitle
          title="Work Experience"
          subtitle="My professional journey in AI research and software development"
        />
        <Stack spacing={3}>
          {workExperience.map((work) => (
            <WorkCard key={work.id} work={work} />
          ))}
        </Stack>
      </Container>
    </Box>
  );
};
