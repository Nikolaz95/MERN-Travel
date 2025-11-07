import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom'

//import css
import "./Sidebar.css"

//import images


//import data
import dataSideBarContent from "../../DashBoardSection/SideBar/SidebarData";
import Button from '../../../../../layouts/Buttons/Button';
import Image from '../../../../../layouts/Images/Image';
import Navigation from '../../../../../layouts/NavigatioLinkComponent/Navigation';
import { AvatarDefault, LogOut, openMenu } from '../../../../../../assets/Icons';

const Sidebar = () => {
    const navigate = useNavigate();
    const { user } = useSelector((state) => state.auth);
    /* const { user } = useSelector((state) => state.auth); */
    const [curOpenDropdown, setCurOpenDropdown] = useState(null);
    /* const [logout] = useLazyLogoutQuery(); */

    const handleToggle = (id) => {
        setCurOpenDropdown(curOpenDropdown === id ? null : id);
    };


    const [sideIsOpen, setSideIsOpen] = useState(false);

    // Toggle function to open/close the sidebar
    const toggleSidebar = () => {
        setSideIsOpen(!sideIsOpen);
    };

    const filteredSidebarData = dataSideBarContent.filter(item => {
        // If no roles specified, show to everyone
        if (!item.roles) return true;
        // Otherwise check if user's role is included
        return item.roles.includes(user?.role);
    });


    /* const handleLogOut = async () => {
        try {
            await logout().unwrap();
            localStorage.removeItem('token');
            navigate("/", { replace: true }); // Replace in history
            window.location.reload(); // Force full reset if needed
        } catch (err) {
            toast.error(err?.data?.message || "Logout failed");
        }
    }; */

    return (
        <aside className={`dashBoardSideBarSection ${sideIsOpen ? 'open' : 'closed'}`}>
            <nav className='dashBoardSideBNav'>
                <div className="sideNavBarTop">
                    <Button variant="openBtn">
                        <Image src={openMenu} variant="btnIcon" onClick={toggleSidebar} />
                    </Button>
                    <Image src={user?.avatar ? user?.avatar?.url : AvatarDefault}
                        variant="navIcon" />
                    {user?.name}
                </div>
                <div className="sideNavMainContent">
                    {filteredSidebarData.map((sidebar) => (
                        <div key={sidebar.id} className={sideIsOpen ? 'active' : 'close'}>
                            <div className="sideNavLink"
                                onClick={() => handleToggle(sidebar.id)}>
                                <Image src={sidebar.icon} variant="sideBarNavIcon" />
                                {sideIsOpen && <span className="navText">{sidebar.titleName}</span>}
                            </div>
                            {curOpenDropdown === sidebar.id && (
                                <div className={`dashBoardDropdownSideBar ${sideIsOpen ? 'open' : 'closed'}`}>
                                    <ul>
                                        {sidebar.dropDownList?.map((dropdownItem) => (
                                            <li key={dropdownItem.title}>
                                                <Navigation to={dropdownItem.path}>
                                                    <Image src={dropdownItem.icon} variant="iconDropDown" />
                                                    {sideIsOpen && <span>{dropdownItem.title}</span>}
                                                </Navigation>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    ))}

                    <div className='sideNavLinklogOut'>
                        <Button variant="sideBtnlogOut" /* onClick={handleLogOut} */>
                            <Image src={LogOut} variant="iconDropDown" />
                            {sideIsOpen && <span className="navText">Log Out</span>}
                        </Button>
                    </div>
                </div>
            </nav>
        </aside>
    )
}

export default Sidebar