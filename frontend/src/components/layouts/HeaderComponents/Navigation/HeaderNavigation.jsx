import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router';

//import css
import "./HeaderNavigation.css";
// import img 
import Product from "../../../../assets/icons/icon-product.png"
import SignIn from "../../../../assets/icons/icon-login.png"
import AvatarDefoult from "../../../../assets/icons/avatar-profile.jpg";

// import components
import Image from '../../Images/Image';
import UserNavigationBar from './UserNavigationBar';
import Navigation from '../../NavigatioLinkComponent/Navigation';

const HeaderNavigation = ({ isSideMenuOpen }) => {
    const [dropdownUser, setDropdownUser] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleToggleDropdown = () => {
        setDropdownUser(!dropdownUser);
    };

    // Prevent scrolling when menu is open
    useEffect(() => {
        if (isSideMenuOpen) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }
        return () => document.body.classList.remove('no-scroll');
    }, [isSideMenuOpen]);


    return (
        <nav className={`navigationSection ${isSideMenuOpen ? "active" : "close"}`}>
            <ul className="navigationList">
                <li>
                    <Navigation to="/product" variant='headNavigation'>
                        <Image src={Product} alt="here should be a picture" variant="navIcon" />
                        Product
                    </Navigation>
                </li>

                {isLoggedIn ? (
                    <UserNavigationBar />
                ) : (

                    <li>
                        <Navigation to="/signIn" variant='headNavigation'>
                            <Image src={SignIn} alt="" variant="navIcon" />
                            Sing in
                        </Navigation>
                    </li>
                )}
            </ul>
        </nav>
    )
}

export default HeaderNavigation