import {ThemeProvider, createTheme} from '@mui/materials'
import { useState } from 'react';
import './App.css';
import Products from './components/Products';
import HeadPage from './components/HeadPage';
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  const [darkMode, setDarkMode] = useState(false)
  const theme = createTheme({
    palette: {
      mode : darkMode ? "dark" : "light"
    },
  })
  return (
    <>
    <Router>
    <Navbar/>
    <Switch>
        <Route exact path="/products">
            <Products/>
          </Route>
        <Route path="/">
          <HeadPage/>
        </Route>
        </Switch>
    </Router>
    </>
  );
}

export default App;
