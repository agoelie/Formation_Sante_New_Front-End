
import React from 'react';
import Navbar from './ui/Navbar';
import HeroSection from './ui/HeroSection';
import FeaturesSection from './ui/FeaturesSection';
import Courses from './ui/Courses';
import Testimonials from './ui/Testimonials';
import FaqSection from './ui/FaqSection';
import Footer from './ui/Footer';
const Home = () => {
    return (
        <>
        <div className='mt-5'>
        <Navbar />
        <HeroSection /> 
        </div>
        
        <FeaturesSection/>  
        <Courses/>
        <Testimonials/> 
        <FaqSection/>   
        <Footer/>    
        </>
    )
}

export default Home;

