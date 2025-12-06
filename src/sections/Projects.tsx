import { Container, Box } from '@mui/material';
import { SectionTitle } from '../components/SectionTitle';
import { ProjectCard } from '../components/ProjectCard';
import { projects } from '../data/portfolioData';

export const Projects = () => {
  return (
    <Box
      sx={{
        py: 10,
        backgroundColor: 'background.paper',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: '10%',
          right: '-10%',
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(102, 126, 234, 0.08) 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(60px)',
          pointerEvents: 'none',
        },
        '&::after': {
          content: '""',
          position: 'absolute',
          bottom: '10%',
          left: '-10%',
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(167, 139, 250, 0.06) 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(60px)',
          pointerEvents: 'none',
        },
      }}
    >
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
