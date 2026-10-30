import React from 'react'
import Navbar from '../components/layout/navbar'
import CoursesHero from '../components/Course/hero'
import LearningProcess from '../components/Course/process'
import AvailableCourses from '../components/Course/availablecourses'
import WhyChooseUs from '../components/Course/whychoose'
import ContactCTA from '../components/Home/cta'
import Footer from '../components/Home/footer'

export default function Course() {
  return (
    <div>
        <Navbar/>
        <CoursesHero/>
        <LearningProcess/>
        <WhyChooseUs/>
        <AvailableCourses/>
        <ContactCTA/>
        <Footer/>
    </div>
  )
}
