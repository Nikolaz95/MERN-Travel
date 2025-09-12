import React from 'react'
import { NavLink, Outlet } from 'react-router';

//import css
import './TravelMapSideBar.css';
import TravelMapSideBarNavigation from './Navigation/TravelMapSideBarNavigation';

const TravelMapSideBar = () => {
    return (
        <section className="travelSideBarSection">
            <aside className="travelSideBar">
                <TravelMapSideBarNavigation />
                <Outlet />
            </aside>
        </section>
    )
}

export default TravelMapSideBar