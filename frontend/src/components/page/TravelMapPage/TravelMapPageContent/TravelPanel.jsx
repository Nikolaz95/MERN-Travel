import React from 'react'
import { Outlet } from 'react-router';

//import css
import './TravelPanel.css';

//import components
import TravelMapSideBarNavigation from './Navigation/TravelMapSideBarNavigation';
import { useGetVisitListQuery } from '../../../../redux/api/visitListApi';

// Content of the desktop sidebar and the mobile modal
const TravelPanel = ({ onClose }) => {
    const { data } = useGetVisitListQuery();
    const visits = data?.userVisitList || [];
    const countryCount = new Set(visits.map((visit) => visit.countryName)).size;

    return (
        <div className="travelPanel">
            <div className="travelPanelHeader">
                <div>
                    <h2 className="travelPanelTitle">My travels</h2>
                    <p className="travelPanelStats">
                        {visits.length} {visits.length === 1 ? "city" : "cities"} · {countryCount} {countryCount === 1 ? "country" : "countries"}
                    </p>
                </div>
                {onClose && (
                    <button type="button" className="travelPanelClose" onClick={onClose} aria-label="Close">
                        ×
                    </button>
                )}
            </div>
            <TravelMapSideBarNavigation />
            <div className="travelPanelContent">
                <Outlet />
            </div>
        </div>
    )
}

export default TravelPanel
