import { Box } from '@mui/material';
import { motion } from 'framer-motion';

export const AnimatedBackground = () => {
  const orbs = [
    {
      id: 1,
      size: 500,
      blur: 80,
      opacity: 0.2,
      color: 'rgba(102, 126, 234, 0.4)',
      duration: 25,
      x: [0, 100, -50, 0],
      y: [0, -80, 60, 0],
    },
    {
      id: 2,
      size: 400,
      blur: 70,
      opacity: 0.15,
      color: 'rgba(167, 139, 250, 0.35)',
      duration: 30,
      x: [0, -120, 80, 0],
      y: [0, 100, -40, 0],
    },
    {
      id: 3,
      size: 450,
      blur: 75,
      opacity: 0.18,
      color: 'rgba(118, 75, 162, 0.3)',
      duration: 28,
      x: [0, 60, -100, 0],
      y: [0, -60, 80, 0],
    },
  ];

  return (
    <Box
      sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        overflow: 'hidden',
        pointerEvents: 'none',
      }}
    >
      {orbs.map((orb) => (
        <motion.div
          key={orb.id}
          style={{
            position: 'absolute',
            width: orb.size,
            height: orb.size,
            borderRadius: '50%',
            background: `radial-gradient(circle, ${orb.color} 0%, transparent 70%)`,
            filter: `blur(${orb.blur}px)`,
            opacity: orb.opacity,
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
          animate={{
            x: orb.x,
            y: orb.y,
          }}
          transition={{
            duration: orb.duration,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </Box>
  );
};
