import { Box, Typography } from '@mui/material';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
}

export const SectionTitle = ({ title, subtitle }: SectionTitleProps) => {
  return (
    <Box sx={{ mb: 6, textAlign: 'center' }}>
      <Typography
        variant="h2"
        sx={{
          mb: 2,
          background: 'linear-gradient(135deg, #1976d2 0%, #42a5f5 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
      >
        {title}
      </Typography>
      {subtitle && (
        <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 600, mx: 'auto' }}>
          {subtitle}
        </Typography>
      )}
    </Box>
  );
};
