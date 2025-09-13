import React from 'react'
import { useNavigate, useSearchParams } from "react-router";

//import css
import './MapContent.css';
import Button from '../../../layouts/Buttons/Button';

const MapContent = () => {
    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();
    const lat = searchParams.get("lat");
    const lng = searchParams.get("lng");
    return (
        <section className='mapSection' onClick={() => navigate("newVisiting")}>
            <main className='mapMainContent'>
                <h1>Map Section</h1>
                <h3>Position: {lat}, {lng}</h3>
                <Button onClick={() => {
                    setSearchParams({ lat: 23, lng: 50 })
                }}>
                    Change Position
                </Button>
            </main>
        </section>
    )
}

export default MapContent