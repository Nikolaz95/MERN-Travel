import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

//import css
import "./Header.css";

//import components
import Logo from '../Logo/Logo';
import HeaderNavigation from '../Navigation/HeaderNavigation';
import HamMenu from '../HamMenu/HamMenu';


//import components

const Header = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [isSideMenuOpen, setIsSideMenuOpen] = useState(null);

    const toggleSideMenu = (e) => {
        e.stopPropagation();
        setIsSideMenuOpen((prevSideMenuOpen) => !prevSideMenuOpen);
    }
    return (
        <header>
            <section className="contentHeader">
                <Logo />
                <HeaderNavigation isSideMenuOpen={isSideMenuOpen} />
                {/* hamburger */}
                {isVisible && (
                    <HamMenu toggleSideMenu={toggleSideMenu} isSideMenuOpen={isSideMenuOpen} />
                )}
                {/* hamburger */}
            </section>
        </header>
    )
}

export default Header