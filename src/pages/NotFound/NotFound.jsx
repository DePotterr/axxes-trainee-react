import { Typography, Container, Box } from '@mui/material';

const NotFound = () => {
  return (
    <Container maxWidth="md">
      <Box display="flex" alignItems="center" flexDirection="column">
        <Typography variant="h1">404</Typography>
        <Typography>Page not found</Typography>
      </Box>
    </Container>
  );
};

export default NotFound;
