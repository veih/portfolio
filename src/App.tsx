
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience';
import Services from './components/services/Services';
import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import { useState } from 'react';

import './App.css'
import { BsMoonStars, BsSun } from 'react-icons/bs';


function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isLight, setIsLight] = useState("body");

  const handleToggle = () => {
    setIsDarkMode((prevMode) => !prevMode);
    if (isLight ==='body') {
    setIsLight('LightMode')
    }

    if (isLight === 'LightMode') {
      setIsLight('body')
    }
  }
  return (
    <div className={isLight}>
      <button className="btn btn-primary" id="button" onClick={handleToggle}>
        {isDarkMode ? (
          <BsSun className="icon" />
        ) : (
          <BsMoonStars className="icon" />
        )}
        {isDarkMode ? "Day" : "night"}
      </button>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      {/*<Contact />
      <Footer />*/}
    </div>
  );
}

export default App
