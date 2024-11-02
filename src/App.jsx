import { useState } from 'react';
import React from 'react';
import './App.css'
import Header from './Components/Header/Header';
import AboutUs from './Components/Principal/About_Us/AboutUs';
import Menu from './Components/Principal/Menu/Menu';
import Event from './Components/Principal/Events/Events';
import Footer from './Components/Footer/Footer';
import Table from './Components/Principal/Table/Table';
import Contact from './Components/Forms/Contact/Contact';
import OnlineBooking from './Components/Forms/OnlineBooking/OnlineBooking';


// import { BrowserRouter as Router } from 'react-router-dom';



function App() {
  return (
    <>
      <section className="section">
        {/* <Header /> */}
        {/* <section className="section" id='Header'><Header /></section>
        <section className="section" id='AboutUs'><AboutUs /></section>
        <section className="section" id='Menu'><Menu /></section>
        <section className="section" id='Events'><Event /></section>
        <section className="section" id='Table'><Table /></section>
        <section className="section" id='Contact'><Contact /></section>
        <section className="section" id='Footer'><Footer /></section> */}

        <OnlineBooking/>

      </section>

    </>
  )
}

export default App
