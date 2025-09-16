import Navbar from "./ui/Navbar"
import LireLivre from "./ui/LireLivre"
// import { Library } from "lucide-react"
import LibraryFooter from "./ui/LibraryFooter"


const read = () => {
    return (
        <div>
            <h1>Reading</h1>
            <Navbar/>
            <LireLivre />
            <LibraryFooter/>
        </div>
    )
}    

export default read