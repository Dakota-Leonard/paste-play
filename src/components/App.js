import { createTheme, ThemeProvider, CssBaseline } from '@mui/material';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from './NavBar/NavBar';
import Home from './Home/Home';
import PasteForm from './Paste/PasteForm';
import ViewPaste from './Paste/ViewPaste';
import PlayPaste from './Paste/PlayPaste';

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
        <Route exact path="/view/:url" component={ViewPaste} />
        <Route exact path="/play/:url" component={PlayPaste} />
      </ThemeProvider>
    </Router>
  );
}

export default App;
