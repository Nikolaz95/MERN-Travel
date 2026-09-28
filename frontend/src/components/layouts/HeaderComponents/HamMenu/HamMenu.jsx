import React from 'react'


//import css
import "./HamMenu.css";

const HamMenu = ({ ref, toggleSideMenu, isSideMenuOpen }) => {
    return (
        <button ref={ref} type="button" onClick={toggleSideMenu}
            className={`ham-menu ${isSideMenuOpen ? "active" : ""}`}
            aria-label={isSideMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isSideMenuOpen}
            aria-controls="main-navigation">
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
        </button>
    )
}

export default HamMenu
