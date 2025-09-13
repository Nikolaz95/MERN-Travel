import React from 'react'
import { NavLink } from 'react-router'

//import css
import './Navigation.css';

const Navigation = ({ to, children, variant = "default", ...rest }) => {
    return (
        <NavLink to={to} {...rest}
            className={({ isActive }) =>
                `customLink ${variant} ${isActive ? "active" : ""}`}>
            {children}
        </NavLink>
    )
}

export default Navigation