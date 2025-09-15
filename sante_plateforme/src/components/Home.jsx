
import React from 'react'
import Navbar from './ui/Navbar'
import HeroSection from './ui/HeroSection';
import FeaturesSection from './ui/FeaturesSection';
import CourseList from './ui/CourseList';
import Testimonials from './ui/Testimonials';
import FaqSection from './ui/FaqSection';
import Footer from './ui/Footer';
const Home = () => {
    return (
        <>
        <Navbar />
        <HeroSection /> 
        <FeaturesSection/>  
        <CourseList/>
        <Testimonials/> 
        <FaqSection/>   
        <Footer/>    
        </>
    )
}

export default Home;

