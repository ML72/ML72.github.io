import { Card, CardContent, Typography, Box } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import type { Education as EducationType } from '../types';

interface EducationCardProps {
  education: EducationType;
}

export const EducationCard = ({ education }: EducationCardProps) => {
  return (
    <Card>
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
            {education.logo ? (
              <img
                src={education.logo}
                alt={`${education.institution} logo`}
                style={{ width: '60px', height: '60px', objectFit: 'contain' }}
              />
            ) : (
              <Box
                sx={{
                  backgroundColor: 'primary.main',
                  borderRadius: '12px',
                  p: 1.5,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <SchoolIcon sx={{ color: 'white', fontSize: 28 }} />
              </Box>
            )}
          </Box>
          <Box sx={{ flex: 1 }}>
            <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
              {education.degree}
            </Typography>
            <Typography variant="body1" color="text.secondary" gutterBottom>
              {education.institution}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
              {education.period}
            </Typography>
            {education.gpa && (
              <Typography variant="body2" color="primary" sx={{ fontWeight: 600 }}>
                GPA: {education.gpa}
              </Typography>
            )}
            {education.description && (
              <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
                {education.description}
              </Typography>
            )}
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};
