import React from 'react'
import toast from 'react-hot-toast';

//import css
import './CityList.css';

//import components
import Loading from '../../../layouts/Loading/Loading';
import Navigation from '../../../layouts/NavigatioLinkComponent/Navigation';
import Flag from '../../../layouts/Flag/Flag';
import { useGetVisitListQuery, useRemoveFromVisitListMutation } from '../../../../redux/api/visitListApi';
import { formatDate } from '../../../../utils/formatDate';

const CityList = () => {
    //Fetch Visit list from user
    const { data, isLoading } = useGetVisitListQuery();

    // newest trip first
    const visits = [...(data?.userVisitList || [])].sort((a, b) => new Date(b.date) - new Date(a.date));

    const [removeVisit, { isLoading: isDeleting }] = useRemoveFromVisitListMutation();

    const handleDelete = (visitId, cityName) => async () => {
        try {
            await removeVisit(visitId).unwrap();
            toast.success(`Visit to ${cityName} deleted!`);
        } catch (error) {
            console.error("Brisanje nije uspelo:", error);
            toast.error(`Couldn't delete visit to ${cityName}!`);
        }
    };


    if (isLoading) return <Loading />;

    if (visits.length === 0) {
        return (
            <div className="travelEmpty">
                <span className="travelEmptyIcon">🗺️</span>
                <p className="travelEmptyTitle">No trips yet</p>
                <p className="travelEmptyText">Click anywhere on the map to add the first place you've visited.</p>
            </div>
        );
    }

    return (
        <ul className='cityList'>
            {visits.map((city) => (
                <li key={city._id} className='cityItem'>
                    <Navigation to={`/travelMap/cities/${city._id}?lat=${city.position.lat}&lng=${city.position.lng}`} variant="cityCard">
                        <Flag emoji={city.flag} size="md" />
                        <div className="cityCardInfo">
                            <p className='cityCardName'>{city.cityName}</p>
                            <p className='cityCardMeta'>
                                {city.countryName} · <time dateTime={city.date}>{formatDate(city.date)}</time>
                            </p>
                        </div>
                    </Navigation>

                    <button type="button" className="cityDelete"
                        onClick={handleDelete(city._id, city.cityName)} disabled={isDeleting}
                        aria-label={`Delete visit to ${city.cityName}`} title="Delete visit">
                        ×
                    </button>
                </li>
            ))}
        </ul>
    )
}

export default CityList
