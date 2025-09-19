import Navbar from "./ui/Navbar"
import ContactUs from "./ui/ContactUs"
import LibraryFooter from "./ui/LibraryFooter"


const Contact = () => {
    return (
        <div>
            <div className="mt-16">
            <Navbar/>
            <ContactUs/>
            </div>
            
            <LibraryFooter/>
        </div>
    )
}

export default Contact