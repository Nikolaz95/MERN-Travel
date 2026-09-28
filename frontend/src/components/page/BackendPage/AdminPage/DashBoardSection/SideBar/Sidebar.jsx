import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast';

//import css
import "./Sidebar.css"


//import data
import dataSideBarContent from "../../DashBoardSection/SideBar/SidebarData";
import Image from '../../../../../layouts/Images/Image';
import Navigation from '../../../../../layouts/NavigatioLinkComponent/Navigation';
import { AvatarDefault, LogOut } from '../../../../../../assets/Icons';
import { useLazyLogoutQuery } from '../../../../../../redux/api/authApi';

// remembered between pages (every dashboard page mounts its own sidebar)
const COLLAPSED_KEY = "dashSidebarCollapsed";

const readCollapsed = () => {
    try {
        return localStorage.getItem(COLLAPSED_KEY) === "1";
    } catch {
        return false;
    }
};

const Sidebar = ({ ref, isOpen, onClose }) => {
    const navigate = useNavigate();
    const { user } = useSelector((state) => state.auth);
    const [logout] = useLazyLogoutQuery();

    // desktop only: show icons without text
    const [isCollapsed, setIsCollapsed] = useState(readCollapsed);

    const toggleCollapsed = () => {
        const next = !isCollapsed;
        setIsCollapsed(next);
        try {
            localStorage.setItem(COLLAPSED_KEY, next ? "1" : "0");
        } catch {
            // storage blocked - only this page remembers it
        }
    };

    const filteredSidebarData = dataSideBarContent.filter(item => {
        // If no roles specified, show to everyone
        if (!item.roles) return true;
        // Otherwise check if user's role is included
        return item.roles.includes(user?.role);
    });


    const handleLogOut = async () => {
        try {
            await logout().unwrap();
            localStorage.removeItem('token');
            navigate("/", { replace: true }); // Replace in history
            window.location.reload(); // Force full reset if needed
        } catch (err) {
            toast.error(err?.data?.message || "Logout failed");
        }
    };

    return (
        <aside ref={ref} id="dashboard-sidebar" aria-label="Dashboard navigation"
            className={`dashSidebar ${isCollapsed ? "isCollapsed" : ""} ${isOpen ? "isOpen" : ""}`}>
            <div className="dashSidebarTop">
                <div className="dashSidebarUser">
                    <Image src={user?.avatar?.url || AvatarDefault} alt="" variant="navAvatar" />
                    <div className="dashSidebarUserText">
                        <p className="dashSidebarUserName">{user?.name}</p>
                        <p className="dashSidebarUserRole">{user?.role}</p>
                    </div>
                </div>
                <button type="button" className="dashCollapseBtn" onClick={toggleCollapsed}
                    aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
                    title={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}>
                    <span aria-hidden="true">{isCollapsed ? "»" : "«"}</span>
                </button>
                <button type="button" className="dashCloseBtn" onClick={onClose} aria-label="Close menu">
                    ×
                </button>
            </div>

            <nav className="dashSidebarNav">
                {filteredSidebarData.map((group) => (
                    <div key={group.id} className="dashSidebarGroup">
                        <p className="dashSidebarGroupTitle">{group.titleName}</p>
                        <ul>
                            {group.links.map((link) => (
                                <li key={link.path}>
                                    <Navigation to={link.path} variant="dashSideLink" onClick={onClose}
                                        title={isCollapsed ? link.title : undefined}>
                                        <Image src={link.icon} alt="" variant="sideIcon" />
                                        <span className="dashSideLinkText">{link.title}</span>
                                    </Navigation>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </nav>

            <button type="button" className="dashSideLink dashLogout" onClick={handleLogOut}
                title={isCollapsed ? "Log out" : undefined}>
                <Image src={LogOut} alt="" variant="sideIcon" />
                <span className="dashSideLinkText">Log out</span>
            </button>
        </aside>
    )
}

export default Sidebar
