import React, { useState } from 'react';
import Nav from './components/Nav'
import About from './components/About';
import Portfolio from './components/Portfolio';
import ContactForm from './components/Contact';
import FooterPage from './components/Footer';
import Resume from './components/Resume';

function App() {
  const [categories] = useState([
    { name: 'Portfolio', description: 'My Work' },
    { name: 'Resume', description: 'View my Resume' },
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  const [contactSelected, setContactSelected] = useState(false);

  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Nav>
      <main>
        {!contactSelected ? (
          <>
            <Portfolio></Portfolio>
            <About></About>
          </>
        ) : (
          <ContactForm></ContactForm>
        )}
        <Resume></Resume>
        <FooterPage></FooterPage>
      </main>
    </div>
  );
}

export default App;
