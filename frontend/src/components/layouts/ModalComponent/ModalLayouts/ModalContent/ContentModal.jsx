import React from 'react'

//import css
import "./ContentModal.css";
import TravelMapSideBarNavigation from '../../../../page/TravelMapPage/TravelMapPageContent/Navigation/TravelMapSideBarNavigation';
import { Outlet } from 'react-router';

const ContentModal = () => {
    return (
        <section className="modallContent">
            <TravelMapSideBarNavigation />
            <Outlet />
        </section>
    )
}

export default ContentModal