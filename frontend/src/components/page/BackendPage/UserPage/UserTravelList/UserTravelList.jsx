import React from 'react'
import titleName from '../../../../hooks/useTitle';

import DashBoardLayout from '../../AdminPage/DashBoardSection/DashboardLayout/DashBoardLayout'
import Loading from '../../../../layouts/Loading/Loading';
import Flag from '../../../../layouts/Flag/Flag';
import Navigation from '../../../../layouts/NavigatioLinkComponent/Navigation';
import { useGetVisitListQuery } from '../../../../../redux/api/visitListApi';
import { formatDate } from '../../../../../utils/formatDate';

//import css
import "./UserTravelList.css"

const UserTravelList = () => {
    titleName(`Users Travels`);

    //Fetch Visit list from user
    const { data, isLoading } = useGetVisitListQuery();

    // newest trip first
    const visits = [...(data?.userVisitList || [])].sort((a, b) => new Date(b.date) - new Date(a.date));
    const countryCount = new Set(visits.map((visit) => visit.countryName)).size;


    return (
        <DashBoardLayout title="My trips"
            subtitle={`${visits.length} ${visits.length === 1 ? "place" : "places"} · ${countryCount} ${countryCount === 1 ? "country" : "countries"}`}>
            {isLoading ? (
                <Loading />
            ) : visits.length === 0 ? (
                <div className="dashCard dashEmpty">
                    <span className="dashEmptyIcon" aria-hidden="true">🗺️</span>
                    <h2 className="dashCardTitle">No trips yet</h2>
                    <p className="dashCardText">Open the travel map and click on a place you've visited.</p>
                    <Navigation to="/travelMap" variant="dashLinkButton">Open travel map</Navigation>
                </div>
            ) : (
                <ul className="tripGrid">
                    {visits.map((visit) => (
                        <li key={visit._id} className="dashCard tripCard">
                            <div className="tripCardTop">
                                <Flag emoji={visit.flag} size="lg" />
                                <div className="tripCardTitle">
                                    <h2 className="tripCardCity">{visit.cityName}</h2>
                                    <p className="tripCardCountry">{visit.countryName}</p>
                                </div>
                            </div>
                            <p className="tripCardDate">📅 {formatDate(visit.date)}</p>
                            <p className={`tripCardNotes ${visit.notes?.trim() ? "" : "isEmpty"}`}>
                                {visit.notes?.trim() || "No notes yet."}
                            </p>
                            <Navigation to={`/travelMap/cities/${visit._id}?lat=${visit.position.lat}&lng=${visit.position.lng}`}
                                variant="dashTextLink">
                                Open on map →
                            </Navigation>
                        </li>
                    ))}
                </ul>
            )}
        </DashBoardLayout>
    )
}

export default UserTravelList
