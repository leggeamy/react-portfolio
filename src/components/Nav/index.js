import React from 'react';

function Nav() {

  const categories = [
    {
      name: "Portfolio",
      description: "View Samples of my work",
    },
    {
      name: "Resume",
      description: "View my resume",
    },
  ]

  function categorySelected(name) {
    console.log(`${name} clicked`)
  }

  return (
    <header>
      <h2>
        <a href="/">
          Amy Legge
        </a>
      </h2>
      <nav>
        <ul className="flex-row">
          <li>
            <a href="#about">
              About Me
            </a>
          </li>
          <li>
            <span>Contact</span>
          </li>
          {categories.map((category) => (
            <li
            key={category.name}
            >
              <span onClick={categorySelected} >
                {category.name}
              </span>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Nav;