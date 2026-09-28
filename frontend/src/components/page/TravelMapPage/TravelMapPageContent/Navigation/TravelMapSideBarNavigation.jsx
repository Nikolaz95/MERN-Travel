import React from 'react'


//import css
import './TravelMapSideBarNavigation.css';
import Navigation from '../../../../layouts/NavigatioLinkComponent/Navigation';

const TravelMapSideBarNavigation = () => {
    return (
        <nav className="travelNavigation" aria-label="Travel lists">
            <ul>
                <li>
                    <Navigation to="cities" variant="travelTab">Cities</Navigation>
                </li>
                <li>
                    <Navigation to="countries" variant="travelTab">Countries</Navigation>
                </li>
            </ul>
        </nav>
    )
}

export default TravelMapSideBarNavigation
