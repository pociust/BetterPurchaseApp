import React from 'react';
import './App.css';
import Home from './pages/Home';
import Cart from './pages/Cart';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <div className="frow row-around mt-15">
          <Link to="/">Home</Link>
          <Link to="/cart">My Cart</Link>
        </div>

        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/cart">
            <Cart></Cart>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
