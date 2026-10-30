import React from 'react'
import AboutHero from '../components/About/hero'
import Navbar from '../components/layout/navbar'
import Footer from '../components/Home/footer'
import WhoWeAre from '../components/About/whoweare'
import MissionVision from '../components/About/mission'
import WhatMakesUsDifferent from '../components/About/difference'
// import OurExpertise from '../components/About/expertise'
import ContactCTA from '../components/Home/cta'

function About() {
  return (
    <div>
        <Navbar/>
        <AboutHero/>
        <WhoWeAre/>
        <MissionVision/>
        <WhatMakesUsDifferent/>
        <ContactCTA/>
        <Footer/>
    </div>
  )
}

export default About