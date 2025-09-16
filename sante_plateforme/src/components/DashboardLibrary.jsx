import LibrarySection from "./dashboard/LibrarySection";
import Sidebar from "./dashboard/SideBar";

const DashboardLibrary = () => {
    return (

        <>
            
            <div className="flex flex-row"><Sidebar/>
            <LibrarySection/></div>
            
        </>
    )
}

export default DashboardLibrary