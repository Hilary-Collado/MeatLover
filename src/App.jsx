import { useState } from 'react';
import React from 'react';
import './App.css'
import Header from './Components/Header/Header';
import AboutUs from './Components/Principal/About_Us/AboutUs';
import Menu from './Components/Principal/Menu/Menu';
import Event from './Components/Principal/Events/Events';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <>
      <section className="section">
        <Header />
        <AboutUs />
        <Menu />
        <Event />
        <Footer />
      </section>

    </>
  )
}

export default App
