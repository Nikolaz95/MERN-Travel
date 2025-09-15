import React from 'react'
import { NavLink } from 'react-router'


//import css
import './TravelMapSideBarNavigation.css';
import Navigation from '../../../../layouts/NavigatioLinkComponent/Navigation';

const TravelMapSideBarNavigation = () => {
    return (
        <nav className="travelNavigation">
            <ul>
                <li>
                    <Navigation to="cities">Cities</Navigation>
                </li>
                <li>
                    <Navigation to="countries">Countries</Navigation>
                </li>
            </ul>
        </nav>
    )
}

export default TravelMapSideBarNavigation