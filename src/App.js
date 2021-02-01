import React from 'react';
import { BrowserRouter as Router, Route, Switch,  } from 'react-router-dom';
import Nav from './components/Nav';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import FooterPage from './components/Footer';
import ContactForm from './components/Contact';
import Home from './components/Home'

function App() {
    return (
      <div className="App">
        <main>
        <Router>
          <div>
            <header>
            <Nav />
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route exact path="/about" component={About}/>
              <Route exact path="/portfolio" component={Portfolio}/>
              <Route exact path="/resume" component={Resume} />
              <Route exact path="/contact" component={ContactForm} />
            </Switch>
            </header>
            <FooterPage></FooterPage>
          </div>
        </Router>
        </main>
      </div>
    
    );
  }

export default App;