import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './Home';
import About from './About';
import Animals from './Animals'
import Cats from './Cats';
import Dogs from './Dogs';
import Adoption from './Adoption';
import Donate from './Donate';
import Petcare from './Petcare';
import Contact from './Contact';
import Administrative from './Administrative';
import reportWebVitals from './reportWebVitals';
import Nav from './Nav';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>

    <Router>
      <Nav />

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/animals">
            <Animals />
          </Route>
          <Route exact path="/cats">
            <Cats />
          </Route>
          <Route exact path="/dogs">
            <Dogs />
          </Route>
          <Route exact path="/adoption">
            <Adoption />
          </Route>
          <Route exact path="/donate">
            <Donate />
          </Route>
          <Route exact path="/petcare">
            <Petcare />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route exact path="/administrative">
            <Administrative />
          </Route>
        </Switch>


    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
