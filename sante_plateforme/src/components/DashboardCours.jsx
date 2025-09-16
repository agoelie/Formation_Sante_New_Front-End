
import SideBar from "./dashboard/SideBar";
import CoursSection from "./dashboard/CoursSection";

const DashboardCours = () => {
    return (
        <>
            <div className="flex flex-row"><SideBar/>
            <CoursSection/></div>
            
        </>
    );
};

export default DashboardCours;