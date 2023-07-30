import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavbarSite from './components/NavbarSite';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Pc from './components/Pc';
import Ps5 from './components/Ps5';
import Xbox from './components/Xbox';
import CompleteOrder from './components/CompleteOrder';
import Profile from './components/Profile';
import Detail from './components/Detail';

function App() {

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <NavbarSite />
      <Routes> {/* Switch yerine Routes kullanılır */}
        <Route path="/home" element={<Home />} />
        {/* Diğer sayfalar için de buraya Route ekleyebilirsiniz */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;