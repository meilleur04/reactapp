import logo from './logo.svg';
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
  return (
    <>
    <Router>
    <Navbar/>
    <Switch>
          <Route path="/about">
            <HeadPage/>
          </Route>
          <Route path="/users">
            <Products/>
          </Route>
        </Switch>
    <HeadPage/>
    </Router>
    </>
  );
}

export default App;
