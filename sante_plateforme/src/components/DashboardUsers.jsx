
import SideBar from "./dashboard/SideBar"
import UsersSection from "./dashboard/UsersSection"
const DashboardUsers = () => {
    return (
        <div>
            <div className="flex flex-row">
                <SideBar/>
                <UsersSection/>
            </div>
        </div>
    )
}

export default DashboardUsers