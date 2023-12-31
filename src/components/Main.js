import 'bootstrap/dist/css/bootstrap.min.css';
import './Main.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import NavbarSite from './NavbarSite'
import Footer from './Footer';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Pc from './Pc';
import Ps5 from './Ps5';
import Xbox from './Xbox';
import CompleteOrder from './CompleteOrder';
import Profile from './Profile';
import Detail from './Detail';
import SignUp from './SignUp';

function Main() {

    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <>
                <NavbarSite />
                <Routes>
                    <Route index="/" element={<Home />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/pc" element={<Pc />} />
                    <Route path="/ps5" element={<Ps5 />} />
                    <Route path="/xbox" element={<Xbox />} />
                    <Route path="/complete-order" element={<CompleteOrder />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/detail/:id" element={<Detail />} />
                </Routes>
                <Footer />
        </>
    );
}

export default Main;