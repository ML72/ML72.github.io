import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, Box } from '@mui/material';
import { theme } from './theme/theme';
import { Hero } from './sections/Hero';
import { Education } from './sections/Education';
import { Projects } from './sections/Projects';
import { WorkExperience } from './sections/WorkExperience';
import { TechStack } from './sections/TechStack';
import { Footer } from './components/Footer';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <Hero />
        <Education />
        <Projects />
        <WorkExperience />
        <TechStack />
        <Footer />
      </Box>
    </ThemeProvider>
  );
}

export default App;
