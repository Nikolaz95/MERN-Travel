import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router';

//import css
import "./HeaderNavigation.css";
// import img 
import Product from "../../../../assets/icons/icon-product.png"
import SignIn from "../../../../assets/icons/icon-login.png"

// import components
import Image from '../../Images/Image';

const HeaderNavigation = ({ isSideMenuOpen }) => {
    const user = {
        name: "John Doe",
        role: "user"
    };

    /* const user = {
        name: "John Doe",
        role: "admin"
    }; */

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
                    <NavLink to="/product" className='navigationStyle'>
                        <Image src={Product} alt="here should be a picture" variant="icon" />
                        Product
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/signIn" className='navigationStyle'>
                        Sing in
                        <Image src={SignIn} alt="" variant="icon" />
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default HeaderNavigation