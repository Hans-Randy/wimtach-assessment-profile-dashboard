import SidebarIcon from "./SidebarIcon";
import avatar from "../assets/avatar.png";
import home from "../assets/home.png";
import back_arrow from "../assets/back_arrow.png";
import logout from "../assets/logout.png";

const Sidebar = () => {
  return (
    <div className="w-20 bg-[#845EC0] flex flex-col items-center py-6 space-y-6">
      <SidebarIcon label="Avatar" icon={avatar} width="37" height="37" />
      <SidebarIcon label="Home" icon={home} width="20" height="22" />
      <SidebarIcon label="Back" icon={back_arrow} width="13" height="23" />
      <div className="mt-auto">
        <SidebarIcon label="Logout" icon={logout} width="23" height="23" />
      </div>
    </div>
  );
};

export default Sidebar;
