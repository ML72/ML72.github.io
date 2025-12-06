import { Container, Box } from '@mui/material';
import { SectionTitle } from '../components/SectionTitle';
import { ProjectCard } from '../components/ProjectCard';
import { projects } from '../data/portfolioData';

export const Projects = () => {
  return (
    <Box sx={{ py: 10, backgroundColor: 'background.paper' }}>
      <Container maxWidth="lg">
        <SectionTitle
          title="Projects"
          subtitle="A selection of my recent work in AI and software development"
        />
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              sm: 'repeat(2, 1fr)',
            },
            gap: 4,
          }}
        >
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </Box>
      </Container>
    </Box>
  );
};
