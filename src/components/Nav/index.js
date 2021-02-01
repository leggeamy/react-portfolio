import React from 'react';
import { Link } from 'react-router-dom';

  export default class Nav extends React.Component {
    render() {    
      return (
        <nav className="Nav">
          <div className="Nav_container">
            <Link  to="/"> </Link>
            <div>
              <ul>
                <li className="navlink">
                  <Link to="/about">About</Link>
                </li>
                <li className="navlink">
                  <Link to="/portfolio">Portfolio</Link>
                </li>
                <li className="navlink">
                  <Link to="/resume">Resume</Link>
                  </li>
                  <li className="navlink">
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      );
    }
  }