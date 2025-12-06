import { Card, CardContent, Typography, Box, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import WorkIcon from '@mui/icons-material/Work';
import type { WorkExperience } from '../types';

const MotionCard = motion.create(Card);

interface WorkCardProps {
  work: WorkExperience;
}

export const WorkCard = ({ work }: WorkCardProps) => {
  return (
    <MotionCard
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      sx={{
        transition: 'box-shadow 0.3s ease',
        '&:hover': {
          boxShadow: '0 4px 20px rgba(102, 126, 234, 0.12)',
        },
      }}
    >
      <CardContent>
        <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
          <Box
            sx={{
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: 60,
              height: 60,
              flexShrink: 0,
            }}
          >
            {work.logo ? (
              <img
                src={work.logo}
                alt={`${work.company} logo`}
                style={{ width: '60px', height: '60px', objectFit: 'contain' }}
              />
            ) : (
              <Box
                sx={{
                  backgroundColor: 'secondary.main',
                  borderRadius: '12px',
                  p: 1.5,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <WorkIcon sx={{ color: 'white', fontSize: 28 }} />
              </Box>
            )}
          </Box>
          <Box sx={{ flex: 1 }}>
            <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
              {work.title}
            </Typography>
            <Typography variant="body1" color="text.secondary" gutterBottom>
              {work.company}
            </Typography>
            <Box sx={{ display: 'flex', gap: 1, mb: 2, flexWrap: 'wrap' }}>
              <Chip label={work.period} size="small" />
              {work.location && <Chip label={work.location} size="small" variant="outlined" />}
            </Box>
            <Box component="ul" sx={{ m: 0, pl: 2.5 }}>
              {work.description.map((item, index) => (
                <Typography
                  component="li"
                  key={index}
                  variant="body2"
                  color="text.secondary"
                  sx={{ mb: 0.5 }}
                >
                  {item}
                </Typography>
              ))}
            </Box>
          </Box>
        </Box>
      </CardContent>
    </MotionCard>
  );
};
