import React from 'react'

//import css
import './TravelMapSideBar.css';
import TravelPanel from './TravelPanel';

const TravelMapSideBar = () => {
    return (
        <section className="travelSideBarSection">
            <aside className="travelSideBar">
                <TravelPanel />
            </aside>
        </section>
    )
}

export default TravelMapSideBar
