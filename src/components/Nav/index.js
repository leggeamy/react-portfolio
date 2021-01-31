import React from 'react';
import { Link } from 'react-router-dom';

  export default class Nav extends React.Component {
    render() {    
      return (
        <nav className="Nav">
          <div className="Nav__container">
            <Link to="/"> </Link>

            <div>
              <ul>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/portfolio">Portfolio</Link>
                </li>
                <li>
                  <Link to="/resume">Resume</Link>
                  </li>
                  <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      );
    }
  }