import { Box, Container, Typography, IconButton, Link } from '@mui/material';
import { GitHub, LinkedIn, Email } from '@mui/icons-material';
import { personalInfo } from '../data/portfolioData';

export const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 6,
        backgroundColor: 'secondary.main',
        color: 'white',
        mt: 'auto',
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center' }}>
          <Box sx={{ mb: 2 }}>
            <IconButton
              component={Link}
              href={personalInfo.github}
              target="_blank"
              sx={{ color: 'white', '&:hover': { color: 'primary.light' } }}
            >
              <GitHub />
            </IconButton>
            <IconButton
              component={Link}
              href={personalInfo.linkedin}
              target="_blank"
              sx={{ color: 'white', '&:hover': { color: 'primary.light' } }}
            >
              <LinkedIn />
            </IconButton>
            <IconButton
              component={Link}
              href={`mailto:${personalInfo.email}`}
              sx={{ color: 'white', '&:hover': { color: 'primary.light' } }}
            >
              <Email />
            </IconButton>
          </Box>
          <Typography variant="body2" sx={{ opacity: 0.8 }}>
            © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};
