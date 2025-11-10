import React, { useEffect, useState } from 'react'
import { useNavigate, useSearchParams } from "react-router";
import { MapContainer, TileLayer, Marker, Popup, useMap, useMapEvent } from "react-leaflet";
import Button from '../../../layouts/Buttons/Button';
import { useUrlPosition } from '../../../hooks/useUrlPosition';

import { useGeolocation } from '../../../hooks/useGeolocation';
import useFetch from '../../../hooks/useFetch';

//import css
import './MapContent.css';
import { useGetVisitListQuery } from '../../../../redux/api/visitListApi';

const MapContent = ({ openModal }) => {
    const navigate = useNavigate();
    const [mapPosition, setMapPosition] = useState([50, 20]);

    /* const { data: dataInfo, loading, error, position } = useFetch("/cities");
    console.log(dataInfo); */

    //Fetch Visit list from user
    const { data: visitData, isLoading } = useGetVisitListQuery();
    console.log(visitData);

    const cities = visitData?.userVisitList || [];
    console.log(cities);

    const { isLoading: isLoadingPosition,
        position: geolocationPosition,
        getPosition, } =
        useGeolocation();

    const [mapLat, mapLng] = useUrlPosition();

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



    return (
        <section className='mapSection' onClick={openModal}>
            <Button variant='position' onClick={getPosition}>
                {isLoadingPosition ? 'Loading' : 'Use Your Position'}
            </Button>
            <MapContainer center={mapPosition} zoom={6} scrollWheelZoom={true} className='map'>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png" />
                {cities.map((cityPosition) => (
                    <Marker position={[cityPosition.position.lat, cityPosition.position.lng]} key={cityPosition.id}>
                        <Popup>
                            <span>{cityPosition.flag}</span> <span>{cityPosition.cityName}</span>
                        </Popup>
                    </Marker>
                ))}

                <ChangeCenter position={mapPosition} />
                <DetectClick />
            </MapContainer>
        </section>
    )
}

function ChangeCenter({ position }) {
    const map = useMap();

    useEffect(() => {
        map.setView(position);
    }, [position, map]);

    return null;
}

function DetectClick() {
    const navigate = useNavigate();
    useMapEvent({
        click: (e) => {
            console.log(e);

            navigate(`newVisiting?lat=${e.latlng.lat}&lng=${e.latlng.lng}`)
        }
    },
    );
}

export default MapContent