import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';

const MotionBox = motion.create(Box);

interface SectionTitleProps {
  title: string;
  subtitle?: string;
}

export const SectionTitle = ({ title, subtitle }: SectionTitleProps) => {
  return (
    <MotionBox
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      sx={{ mb: 6, textAlign: 'center' }}
    >
      <Typography
        variant="h2"
        sx={{
          mb: 2,
          background: 'linear-gradient(135deg, #1976d2 0%, #42a5f5 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          position: 'relative',
        }}
      >
        {title}
      </Typography>
      {subtitle && (
        <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 600, mx: 'auto' }}>
          {subtitle}
        </Typography>
      )}
    </MotionBox>
  );
};
