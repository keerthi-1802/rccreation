import React from 'react'
import Hero from '../components/Home/hero'
import Navbar from '../components/layout/navbar'
import AboutSection from '../components/Home/about'
import ServicesSection from '../components/Home/service'
import WhyChooseUs from '../components/Home/choose'
import OurProcess from '../components/Home/process'
import Testimonials from '../components/Home/testimonials'
import ContactCTA from '../components/Home/cta'
import Footer from '../components/Home/footer'

function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <AboutSection />
      <ServicesSection />
      <WhyChooseUs />
      <OurProcess/>
      <Testimonials/>
      <ContactCTA/>
      <Footer/>
    </div>
  )
}

export default Home