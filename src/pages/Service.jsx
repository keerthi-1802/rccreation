import React from 'react'
import ServicesHero from '../components/Service/hero'
import Navbar from '../components/layout/navbar'
import AboutSection from '../components/Home/about'
import ServicesSection from '../components/Service/servicesection'
import ContactCTA from '../components/Home/cta'
import Footer from '../components/Home/footer'


function Service() {
  return (
    <div>
        <Navbar/>
        <ServicesHero/>
        <AboutSection/>
        <ServicesSection/>
        <ContactCTA/>
        <Footer/>
    </div>
  )
}

export default Service