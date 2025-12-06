import { Box, Container, Typography, Button } from '@mui/material';
import { GitHub, LinkedIn, Email } from '@mui/icons-material';
import { personalInfo } from '../data/portfolioData';

export const Hero = () => {
  return (
    <Box
      sx={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        py: { xs: 10, md: 15 },
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <Typography
            variant="h1"
            sx={{
              mb: 2,
              fontSize: { xs: '2.5rem', md: '3.5rem', lg: '4rem' },
            }}
          >
            Hi, I'm {personalInfo.name}
          </Typography>
          <Typography
            variant="h4"
            sx={{
              mb: 4,
              fontWeight: 400,
              opacity: 0.95,
              fontSize: { xs: '1.25rem', md: '1.75rem' },
            }}
          >
            {personalInfo.title}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              mb: 5,
              maxWidth: 700,
              mx: 'auto',
              fontSize: '1.1rem',
              opacity: 0.9,
            }}
          >
            {personalInfo.description}
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button
              variant="contained"
              size="large"
              startIcon={<Email />}
              sx={{
                backgroundColor: 'white',
                color: '#667eea',
                '&:hover': {
                  backgroundColor: 'rgba(255,255,255,0.9)',
                },
              }}
              href={`mailto:${personalInfo.email}`}
            >
              Contact Me
            </Button>
            <Button
              variant="outlined"
              size="large"
              startIcon={<GitHub />}
              sx={{
                borderColor: 'white',
                color: 'white',
                '&:hover': {
                  borderColor: 'white',
                  backgroundColor: 'rgba(255,255,255,0.1)',
                },
              }}
              href={personalInfo.github}
              target="_blank"
            >
              GitHub
            </Button>
            <Button
              variant="outlined"
              size="large"
              startIcon={<LinkedIn />}
              sx={{
                borderColor: 'white',
                color: 'white',
                '&:hover': {
                  borderColor: 'white',
                  backgroundColor: 'rgba(255,255,255,0.1)',
                },
              }}
              href={personalInfo.linkedin}
              target="_blank"
            >
              LinkedIn
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
