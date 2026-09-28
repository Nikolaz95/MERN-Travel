import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from "react-router";
import { MapContainer, TileLayer, Marker, Popup, useMap, useMapEvent } from "react-leaflet";
import L from "leaflet";
import toast from 'react-hot-toast';
import Button from '../../../layouts/Buttons/Button';
import Navigation from '../../../layouts/NavigatioLinkComponent/Navigation';
import Flag from '../../../layouts/Flag/Flag';
import { useUrlPosition } from '../../../hooks/useUrlPosition';

import { useGeolocation } from '../../../hooks/useGeolocation';
import { flagUrl } from '../../../../utils/flagUrl';
import { formatDate } from '../../../../utils/formatDate';

//import css
import './MapContent.css';
import { useGetVisitListQuery } from '../../../../redux/api/visitListApi';


// Pin with the country flag inside
const markerIcons = new Map();
function getVisitIcon(flag) {
    if (!markerIcons.has(flag)) {
        const src = flagUrl(flag);
        const inner = src ? `<img src="${src}" alt="" />` : `<span>📍</span>`;
        markerIcons.set(flag, L.divIcon({
            className: "visitMarkerIcon",
            html: `<div class="visitMarker">${inner}</div>`,
            iconSize: [40, 40],
            iconAnchor: [20, 48],
            popupAnchor: [0, -46],
        }));
    }
    return markerIcons.get(flag);
}

// Pulsing dot where the user clicked to add a new visit
const newPlaceIcon = L.divIcon({
    className: "visitMarkerIcon",
    html: `<div class="newPlaceMarker"></div>`,
    iconSize: [20, 20],
    iconAnchor: [10, 10],
});


const MapContent = ({ openModal }) => {
    const navigate = useNavigate();
    const { pathname } = useLocation();
    const [mapPosition, setMapPosition] = useState([50, 20]);

    //Fetch Visit list from user
    const { data: visitData } = useGetVisitListQuery();
    const cities = visitData?.userVisitList || [];

    const { isLoading: isLoadingPosition,
        position: geolocationPosition,
        error: geolocationError,
        getPosition, } =
        useGeolocation();

    const [mapLat, mapLng] = useUrlPosition();
    const isAddingVisit = pathname.endsWith("newVisiting") && mapLat && mapLng;

    useEffect(
        function () {
            if (mapLat && mapLng) setMapPosition([mapLat, mapLng]);
        },
        [mapLat, mapLng]
    );

    useEffect(() => {
        if (geolocationPosition) {
            setMapPosition([geolocationPosition.lat, geolocationPosition.lng]);
            navigate(`newVisiting?lat=${geolocationPosition.lat}&lng=${geolocationPosition.lng}`);
        }
    }, [geolocationPosition, navigate]);

    useEffect(() => {
        if (geolocationError) toast.error(geolocationError);
    }, [geolocationError]);


    return (
        <section className='mapSection'>
            <Button variant='position' onClick={() => { getPosition(); openModal(); }} disabled={isLoadingPosition}>
                📍 {isLoadingPosition ? 'Finding you...' : 'Use my location'}
            </Button>
            <MapContainer center={mapPosition} zoom={6} scrollWheelZoom={true} className='map'>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png" />
                {cities.map((city) => (
                    <Marker position={[city.position.lat, city.position.lng]} key={city._id} icon={getVisitIcon(city.flag)}>
                        <Popup>
                            <div className="visitPopup">
                                <Flag emoji={city.flag} size="sm" />
                                <div>
                                    <p className="visitPopupCity">{city.cityName}</p>
                                    <p className="visitPopupDate">{formatDate(city.date)}</p>
                                </div>
                            </div>
                            <Navigation to={`/travelMap/cities/${city._id}?lat=${city.position.lat}&lng=${city.position.lng}`}
                                variant="visitPopupLink" onClick={openModal}>
                                View details →
                            </Navigation>
                        </Popup>
                    </Marker>
                ))}

                {isAddingVisit && <Marker position={[mapLat, mapLng]} icon={newPlaceIcon} interactive={false} />}

                <ChangeCenter position={mapPosition} />
                <DetectClick onMapClick={openModal} />
            </MapContainer>
        </section>
    )
}

function ChangeCenter({ position }) {
    const map = useMap();

    useEffect(() => {
        map.flyTo(position, map.getZoom(), { duration: 0.8 });
    }, [position, map]);

    return null;
}

function DetectClick({ onMapClick }) {
    const navigate = useNavigate();
    useMapEvent({
        click: (e) => {
            navigate(`newVisiting?lat=${e.latlng.lat}&lng=${e.latlng.lng}`);
            onMapClick();
        }
    },
    );
}

export default MapContent
