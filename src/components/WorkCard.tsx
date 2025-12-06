import { Card, CardContent, Typography, Box, Chip } from '@mui/material';
import WorkIcon from '@mui/icons-material/Work';
import type { WorkExperience } from '../types';

interface WorkCardProps {
  work: WorkExperience;
}

export const WorkCard = ({ work }: WorkCardProps) => {
  return (
    <Card>
      <CardContent>
        <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
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
    </Card>
  );
};
