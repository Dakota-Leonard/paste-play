import NavBar from './NavBar/NavBar';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { createTheme, ThemeProvider, CssBaseline } from '@mui/material';

const theme = createTheme({
  palette: {
    background: {
      default: '#7E7E7E',
    },
    primary: {
      main: '#000',
    },
    secondary: {
      main: '#00897B',
    },
    callToAction: {
      main: '#C62B28',
    },
  },
});

function App() {
  const [routeResponse, setRouteResponse] = useState('');

  useEffect(() => {
    apiRouteTest();
  }, []);

  //Route Test
  const apiRouteTest = async () => {
    try {
      const { data } = await axios.get('/api');
      setRouteResponse(data);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <NavBar />
      <div>
        <h1>{routeResponse}</h1>
      </div>
    </ThemeProvider>
  );
}

export default App;
