
import AboutUse from "./ui/AboutUse"
import LibraryFooter from "./ui/LibraryFooter"
import Navbar from "./ui/Navbar"
import TeamsSection from "./ui/TeamsSection"
const About = () => {
    return (
        <>
            <div className="mt-15">
            <Navbar/>
            <AboutUse/>
            </div>
            
            <TeamsSection/>
            <LibraryFooter/>
       
        </>
    )
}

export default About