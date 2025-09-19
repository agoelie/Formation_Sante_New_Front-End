import Navbar from "./ui/Navbar"
import LibraryPromoSection from "./ui/LibraryPromoSection"
import LibraryPopularSection from "./ui/LibraryPopularSection"
import LibraryFooter from "./ui/LibraryFooter"

const books =() => {
    return (
        <div>

            <div className="mt-15">
                <Navbar/>
            <LibraryPromoSection/>
            </div>
            
            <LibraryPopularSection/>
            <LibraryFooter/>
        </div>
    )
}

export default books