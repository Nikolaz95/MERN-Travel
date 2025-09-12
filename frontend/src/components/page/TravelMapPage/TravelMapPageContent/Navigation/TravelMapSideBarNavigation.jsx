import React from 'react'
import { NavLink } from 'react-router'


//import css
import './TravelMapSideBarNavigation.css';

const TravelMapSideBarNavigation = () => {
    return (
        <nav className="travelNavigation">
            <ul>
                <li>
                    <NavLink to="cities">Cities</NavLink>
                </li>
                <li>
                    <NavLink to="countries">Countries</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default TravelMapSideBarNavigation