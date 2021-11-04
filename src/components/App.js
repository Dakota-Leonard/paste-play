import { createTheme, ThemeProvider, CssBaseline } from '@mui/material';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from './NavBar/NavBar';
import Home from './Home/Home';
import PasteForm from './Paste/PasteForm';

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
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <NavBar />
        {/* Routes! */}
        <Route exact path="/" component={Home} />
        <Route exact path="/new" component={PasteForm} />
      </ThemeProvider>
    </Router>
  );
}

export default App;
