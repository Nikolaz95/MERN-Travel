import React, { useState } from 'react'
import { NavLink } from 'react-router';


//import css
import "./UserNavigationBar.css";

//import images
import AvatarDefoult from "../../../../assets/icons/avatar-profile.jpg";
import DashBoard from "../../../../assets/icons/icon-dashboard.png"
import LogOut from "../../../../assets/icons/icon-logout2.png"

//import Components
import Image from '../../Images/Image';
import Button from '../../Buttons/Button';
import Navigation from '../../NavigatioLinkComponent/Navigation';


const UserNavigationBar = ({ user, handleLogOut }) => {
    /* const user = {
        name: "John Doe",
        role: "admin"
    }; */
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    // Toggle dropdown menu
    const handleDropdownToggle = () => {
        setIsDropdownOpen(prev => !prev);
    };


    return (
        <li className="navigationListItem userDropdownContainer">
            <div className="userIconWrapper navigationLink" onClick={handleDropdownToggle}>
                <Image src={user?.avatar ? user?.avatar?.url : AvatarDefoult}
                    alt={user.name} variant="navIcon" />
                <p className="textNavigation">{user.name}</p>
            </div>
            {isDropdownOpen && (
                <ul className="dropdownMenu">
                    {user?.role === "admin" && (
                        <li className="dropdownItem">
                            <Navigation to="/admin/dashBoard" variant='dropdownNav' className="dropdownLink">
                                <Image src={DashBoard} variant="navIcon" />
                                Dashboard
                            </Navigation>
                        </li>
                    )}
                    <li className="dropdownItem">
                        <Navigation to="/user/settings-Profile" variant='dropdownNav' className="dropdownLink">
                            <Image src={AvatarDefoult} variant="navIcon" />
                            Profile
                        </Navigation>
                    </li>
                    <li className="dropdownItem" >
                        {/* <Navigation to="/" variant='dropdownNav' className="dropdownLink">
                            <Image src={LogOut} variant="navIcon" />
                            Logout
                        </Navigation > */}
                        <Button className="dropdownLink logoutButton"
                            to="/" variant="loginBtn"
                            onClick={handleLogOut}>
                            <Image src={LogOut} variant="navIcon" />
                            Logout
                        </Button>
                    </li>
                </ul>
            )}
        </li>

    )
}

export default UserNavigationBar