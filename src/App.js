import React, { useState } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import StickyNav from './components/StickyNav';
import NotFound from './components/NotFound'; // Página de error 404
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Usaremos `Routes`
import './App.css';

function App() {
  const [isNavOpen, setNavOpen] = useState(false);

  const toggleNav = () => {
    setNavOpen(!isNavOpen);
  };

  return (
    <Router>
      <Routes>
        {/* Ruta principal con desplazamiento en una sola página */}
        <Route path="/" element={
          <>
            <Header isNavOpen={isNavOpen} toggleNav={toggleNav} />
            <StickyNav isNavOpen={isNavOpen} toggleNav={toggleNav} />
            <Home />
            <About />
            <Projects />
            <Contact />
            <Footer />
          </>
        } />
        
        {/* Ruta para la página de error 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
