import { Container, Typography, Box } from '@mui/material';
import ImageUpload from './ImageUpload';

function App() {
  return (
    <Box 
      sx={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '100vh' 
      }}
    >
      <Container 
        sx={{ 
          textAlign: 'center' 
        }}
      >
        <Typography variant="h4" align="center" sx={{ mt: 5 }}>Defect Detection</Typography>
        <ImageUpload />
      </Container>
    </Box>
  );
}

export default App;
