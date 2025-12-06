import { Container, Box, Paper, Typography, Chip } from '@mui/material';
import { SectionTitle } from '../components/SectionTitle';
import { techStack } from '../data/portfolioData';

export const TechStack = () => {
  return (
    <Box sx={{ py: 10, backgroundColor: 'background.paper' }}>
      <Container maxWidth="lg">
        <SectionTitle
          title="Tech Stack"
          subtitle="Technologies and tools I work with"
        />
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              md: 'repeat(2, 1fr)',
            },
            gap: 3,
          }}
        >
          {techStack.map((category) => (
              <Paper
                key={category.category}
                elevation={0}
                sx={{
                  p: 3,
                  height: '100%',
                  border: '1px solid',
                  borderColor: 'divider',
                  transition: 'all 0.3s ease-in-out',
                  '&:hover': {
                    borderColor: 'primary.main',
                    transform: 'translateY(-4px)',
                  },
                }}
              >
                <Typography
                  variant="h6"
                  gutterBottom
                  sx={{ fontWeight: 600, mb: 2, color: 'primary.main' }}
                >
                  {category.category}
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                  {category.technologies.map((tech, techIndex) => (
                    <Chip
                      key={techIndex}
                      label={tech}
                      sx={{
                        backgroundColor: '#f5f5f5',
                        fontWeight: 500,
                        '&:hover': {
                          backgroundColor: '#e3f2fd',
                          color: 'primary.main',
                        },
                      }}
                    />
                  ))}
                </Box>
              </Paper>
          ))}
        </Box>
      </Container>
    </Box>
  );
};
