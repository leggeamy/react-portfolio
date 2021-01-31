import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Nav from './components/Nav';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import Contact from './components/Contact';
// import FooterPage from './components/Footer';

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Nav />
            <Switch>
              <Route exactly component={About} pattern="/about" />
              <Route exactly component={Portfolio} pattern="/portfolio" />
              <Route exactly component={Resume} pattern="/resume" />
              <Route exactly component={Contact} pattern="/contact" />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}