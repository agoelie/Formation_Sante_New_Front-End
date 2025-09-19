
import React from 'react'
import Navbar from './ui/Navbar'
import PromoSection from './ui/PromoSection'
// import Courses from './ui/Courses'
import AllCourses from './ui/AllCourses'
import Footer from './ui/Footer'
import CategoriesCoursSection from './ui/CategoriesCoursSection'

const CourseList = () => {
    return (
        <div>
            <div className='mt-15'>
            <Navbar/>
            <PromoSection/>
            </div>
            
            {/* <Courses/> */}
            <CategoriesCoursSection/>
            <AllCourses/>
            <Footer/>
            
        </div>
    )
}

export default CourseList