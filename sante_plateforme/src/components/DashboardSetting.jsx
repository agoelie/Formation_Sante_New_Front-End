
import SideBar from "./dashboard/SideBar"
import SettingSection from "./dashboard/SettingSection"
const DashboardSetting = () => {
    return (
        <div>
            <div className="flex flex-row ">
                <SideBar/>
                <SettingSection/>
            </div>
        </div>
    )       

}

export default DashboardSetting