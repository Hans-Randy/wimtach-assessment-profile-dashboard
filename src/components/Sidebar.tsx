import SidebarIcon from "./SidebarIcon";
import {
  LogoutIcon,
  HomeIcon,
  BackArrowIcon,
  DashboardIcon,
  LogoutIcon2,
} from "./Icons";

const Sidebar = () => {
  return (
    <div className="w-20 bg-[#845EC0] flex flex-col items-center py-6 space-y-6">
      <SidebarIcon label="Logout" icon={<LogoutIcon />} />
      <SidebarIcon label="Home" icon={<HomeIcon />} />
      <SidebarIcon label="Back" icon={<BackArrowIcon />} />
      <SidebarIcon label="Dashboard" icon={<DashboardIcon />} />
      <div className="mt-auto">
        <SidebarIcon label="Logout" icon={<LogoutIcon2 />} />
      </div>
    </div>
  );
};

export default Sidebar;
