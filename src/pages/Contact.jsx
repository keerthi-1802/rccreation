import React from 'react'
import ContactHero from '../components/Contact.jsx/hero'
import Navbar from '../components/layout/navbar'
import ContactForm from '../components/Contact.jsx/form'
import Footer from '../components/Home/footer'
import ContactCTA from '../components/Home/cta'

function Contact() {
  return (
    <div>
        <Navbar/>
        <ContactHero/>
        <ContactForm/>
        <ContactCTA/>
        <Footer/>

    </div>
  )
}

export default Contact