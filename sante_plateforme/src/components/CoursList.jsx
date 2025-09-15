
import React from 'react'
import Navbar from './ui/Navbar'
import PromoSection from './ui/PromoSection'
// import Courses from './ui/Courses'
import AllCourses from './ui/AllCourses'
import Footer from './ui/Footer'


const CourseList = () => {
    return (
        <div>

            <Navbar/>
            <PromoSection/>
            {/* <Courses/> */}
            <AllCourses/>
            <Footer/>
            
        </div>
    )
}

export default CourseList