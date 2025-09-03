import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

//import css
import "./Header.css";
import Logo from '../Logo/Logo';
import HeaderNavigation from '../Navigation/HeaderNavigation';


//import components

const Header = () => {
    return (
        <header>
            <section className="contentHeader">
                <Logo />
                <HeaderNavigation />
            </section>
        </header>
    )
}

export default Header