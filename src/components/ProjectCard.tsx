import { Card, CardContent, CardMedia, Typography, Box, Chip, Button, CardActions } from '@mui/material';
import type { Project } from '../types';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import GitHubIcon from '@mui/icons-material/GitHub';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <CardMedia
        component="img"
        height="280"
        image={project.image}
        alt={project.title}
        sx={{ objectFit: 'contain' }}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', mb: 1 }}>
          <Typography variant="h5" sx={{ fontWeight: 600 }}>
            {project.title}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 500 }}>
            {project.year}
          </Typography>
        </Box>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          {project.description}
        </Typography>
        {project.technologies && (
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
            {project.technologies.map((tech, index) => (
              <Chip
                key={index}
                label={tech}
                size="small"
                sx={{ backgroundColor: '#e3f2fd', color: '#1976d2' }}
              />
            ))}
          </Box>
        )}
      </CardContent>
      <CardActions sx={{ p: 2, pt: 0, gap: 1 }}>
        <Button
          size="small"
          variant="contained"
          endIcon={<OpenInNewIcon />}
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          sx={{ flexGrow: 1 }}
        >
          View Project
        </Button>
        <Button
          size="small"
          variant="outlined"
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            minWidth: '40px',
            width: '40px',
            height: '40px',
            p: 0,
            color: 'rgba(0, 0, 0, 0.7)',
            borderColor: 'divider',
            '&:hover': {
              color: 'rgba(0, 0, 0, 0.9)',
            },
          }}
        >
          <GitHubIcon />
        </Button>
      </CardActions>
    </Card>
  );
};
