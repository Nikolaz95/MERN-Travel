import React from 'react'

//import css
import "./HeaderNavigation.css";


const HeaderNavigation = () => {
    return (
        <nav className={`navigationSection `}>
            <ul className="navigationList">
                <li>Product</li>
                <li>Sign In</li>
            </ul>
        </nav>
    )
}

export default HeaderNavigation