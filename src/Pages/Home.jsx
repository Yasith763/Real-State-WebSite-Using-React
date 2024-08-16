import React from 'react';
import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import About from '../Components/About'
import Services from '../Components/Services'
import Residencies from '../Components/Residencies'
import Contacts from '../Components/Contacts'
import Footer from '../Components/Footer'

export default function Home() {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <About/>
        <Services/>
        <Residencies/>
        <Contacts/>
        <Footer/>
    </div>
  )
}
