import React, { useState } from 'react'
import { useNavigate, useSearchParams } from "react-router";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";


//import css
import './MapContent.css';
import Button from '../../../layouts/Buttons/Button';

const MapContent = () => {
    const navigate = useNavigate();
    const [mapPosition, setMapPosition] = useState([40, 0]);
    const [searchParams, setSearchParams] = useSearchParams();
    const lat = searchParams.get("lat");
    const lng = searchParams.get("lng");
    return (
        <section className='mapSection' onClick={() => navigate("newVisiting")}>
            {/* <main className='mapMainContent'> */}
            <MapContainer center={mapPosition} zoom={13} scrollWheelZoom={true} className='map'>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png" />
                <Marker position={mapPosition}>
                    <Popup>
                        DISI BIO 91 <br /> Easily customizable.
                    </Popup>
                </Marker>
            </MapContainer>
            {/* </main> */}
        </section>
    )
}

export default MapContent