import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react';
import NavbarSite from './components/NavbarSite';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';

function App() {

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <NavbarSite/>
      <About/>
      <Footer/>
    </>
  );
} 

export default App;