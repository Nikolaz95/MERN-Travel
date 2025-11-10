import React, { useState } from 'react'
import { NavLink } from 'react-router';


//import css
import "./UserNavigationBar.css";

//import image
import { LogOut, AvatarDefault, DashBoard } from "../../../../assets/Icons";


//import Components
import Image from '../../Images/Image';
import Button from '../../Buttons/Button';
import Navigation from '../../NavigatioLinkComponent/Navigation';


const UserNavigationBar = ({ user, handleLogOut }) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    // Toggle dropdown menu
    const handleDropdownToggle = () => {
        setIsDropdownOpen(prev => !prev);
    };


    return (
        <li className="navigationListItem userDropdownContainer">
            <div className="userIconWrapper navigationLink" onClick={handleDropdownToggle}>
                <Image src={user?.avatar ? user?.avatar?.url : AvatarDefault}
                    alt={user.name} variant="navIcon" />
                <p className="textNavigation">{user.name.substring(0, 6)}</p>
            </div>
            {isDropdownOpen && (
                <ul className="dropdownMenu">
                    {user?.role === "admin" && (
                        <li className="dropdownItem">
                            <Navigation to="/admin/dashBoard" variant='dropdownNav' className="dropdownLink">
                                <Image src={DashBoard} variant="navIcon" />
                                <p className="dropDownText">Dashboard</p>
                            </Navigation>
                        </li>
                    )}
                    <li className="dropdownItem">
                        <Navigation to="/user/settings-Profile" variant='dropdownNav' className="dropdownLink">
                            <Image src={user?.avatar ? user?.avatar?.url : AvatarDefault} variant="navIcon" />
                            <p className="dropDownText">Profile</p>
                        </Navigation>
                    </li>
                    <li className="dropdownItem" >
                        <Button className="dropdownLink logoutButton"
                            to="/" variant="loginBtn"
                            onClick={handleLogOut}>
                            <Image src={LogOut} variant="navIcon" />
                            <p className="dropDownText">Logout</p>
                        </Button>
                    </li>
                </ul>
            )}
        </li>

    )
}

export default UserNavigationBar