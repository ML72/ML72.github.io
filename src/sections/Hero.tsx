import { Box, Container, Typography, Button } from '@mui/material';
import { GitHub, LinkedIn, Email } from '@mui/icons-material';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { personalInfo } from '../data/portfolioData';
import { AnimatedBackground } from '../components/AnimatedBackground';

const MotionBox = motion.create(Box);

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
      <AnimatedBackground />
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <Typography
              variant="h1"
              sx={{
                mb: 2,
                fontSize: { xs: '2.5rem', md: '3.5rem', lg: '4rem' },
              }}
            >
              Hi, I'm {personalInfo.name}
            </Typography>
          </MotionBox>
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          >
            <Typography
              variant="h4"
              sx={{
                mb: 4,
                fontWeight: 400,
                opacity: 0.95,
                fontSize: { xs: '1.25rem', md: '1.75rem' },
                minHeight: { xs: '2.5rem', md: '3rem' },
              }}
            >
              <TypeAnimation
                sequence={[
                  'Machine Learning Engineer',
                  2500,
                  'AI Researcher',
                  2500,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </Typography>
          </MotionBox>
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
          >
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
          </MotionBox>
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
            sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}
          >
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
          </MotionBox>
        </Box>
      </Container>
    </Box>
  );
};
