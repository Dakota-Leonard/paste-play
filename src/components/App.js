import { createTheme, ThemeProvider, CssBaseline } from '@mui/material';
import { BrowserRouter as Router, Route, withRouter } from 'react-router-dom';
import NavBar from './NavBar/NavBar';
import Home from './Home/Home';
import Paste from './Paste/Paste';

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

        <Route exact path="/new" component={withRouter(Paste)} />
        <Route exact path="/" component={withRouter(Home)} />
      </ThemeProvider>
    </Router>
  );
}

export default App;
