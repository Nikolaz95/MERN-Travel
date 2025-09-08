import React from 'react'
import { NavLink } from 'react-router';
import titleName from '../..//hooks/useTitle';


//import css
import './TravelMapPage.css';

//import components
import VideoBackground from '../../layouts/VideoBackground/VideoBackground ';
import TravelMapSideBar from './TravelMapPageContent/TravelMapSideBar';

const TravelMapPage = () => {
    titleName('Your travel experience');
    return (
        <>
            <VideoBackground />
            <section className="travelMapPageLayout">
                <TravelMapSideBar />
            </section>
        </>
    )
}

export default TravelMapPage