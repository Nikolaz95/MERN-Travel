import React from 'react'
import { NavLink, Outlet } from 'react-router';

//import css
import './TravelMapSideBar.css';

const TravelMapSideBar = () => {
    return (
        <aside className="travelSideBar">
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
            <Outlet />
        </aside>
    )
}

export default TravelMapSideBar