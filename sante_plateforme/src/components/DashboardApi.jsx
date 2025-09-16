import SideBar from "./dashboard/SideBar"
import ApiSection from "./dashboard/ApiSection"

const DashboardApi = () => {
    return (
        <>

        <div className="flex flex-row">
            <SideBar/>
            <ApiSection/>
        </div>
        </>
    )
}   

export default DashboardApi