import React, { useCallback, useRef, useState } from 'react'


//import css
import "./UserNavigationBar.css";

//import image
import { LogOut, AvatarDefault, DashBoard, UserIcon } from "../../../../assets/Icons";


//import Components
import Image from '../../Images/Image';
import Navigation from '../../NavigatioLinkComponent/Navigation';

//import hooks
import useClickOutside from '../../../hooks/useClickOutside';


const UserNavigationBar = ({ user, handleLogOut, closeSideMenu }) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);
    const avatar = user?.avatar?.url || AvatarDefault;

    const closeDropdown = useCallback(() => setIsDropdownOpen(false), []);

    // Close dropdown on click outside or Escape
    useClickOutside(dropdownRef, closeDropdown, isDropdownOpen);

    // Toggle dropdown menu
    const handleDropdownToggle = () => {
        setIsDropdownOpen(prev => !prev);
    };

    // Close dropdown (and mobile sidebar) after choosing a link
    const handleNavigate = () => {
        closeDropdown();
        closeSideMenu?.();
    };


    return (
        <li ref={dropdownRef} className="userDropdownContainer">
            <button type="button" className="userDropdownToggle" onClick={handleDropdownToggle}
                aria-haspopup="true" aria-expanded={isDropdownOpen} aria-controls="user-dropdown-menu">
                <Image src={avatar} alt="" variant="navAvatar" />
                <span className="userDropdownName">{user?.name}</span>
                <span className={`userDropdownChevron ${isDropdownOpen ? "isOpen" : ""}`} aria-hidden="true" />
            </button>

            <div id="user-dropdown-menu" className={`dropdownMenu ${isDropdownOpen ? "isOpen" : ""}`}>
                <div className="dropdownHeader">
                    <p className="dropdownUserName">{user?.name}</p>
                    {user?.email && <p className="dropdownUserEmail">{user.email}</p>}
                </div>
                <ul className="dropdownList">
                    {user?.role === "admin" && (
                        <li>
                            <Navigation to="/admin/dashBoard" variant='dropdownNav' onClick={handleNavigate}>
                                <Image src={DashBoard} alt="" variant="navIcon" />
                                <span>Dashboard</span>
                            </Navigation>
                        </li>
                    )}
                    <li>
                        <Navigation to="/user/settings-Profile" variant='dropdownNav' onClick={handleNavigate}>
                            <Image src={UserIcon} alt="" variant="navIcon" />
                            <span>Profile</span>
                        </Navigation>
                    </li>
                    <li className="dropdownDivider">
                        <button type="button" className="dropdownNav dropdownLogout" onClick={handleLogOut}>
                            <Image src={LogOut} alt="" variant="navIcon" />
                            <span>Logout</span>
                        </button>
                    </li>
                </ul>
            </div>
        </li>

    )
}

export default UserNavigationBar
