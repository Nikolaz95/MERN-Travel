import React, { useState, useEffect } from 'react'
import useNavigateTo from '../../hooks/useNavigateTo';
import { useUrlPosition } from '../../hooks/useUrlPosition';

//import css
import './NewVisiting.css';
import Button from '../Buttons/Button';

const NewVisiting = () => {
    const { goBack } = useNavigateTo();
    const [lat, lng] = useUrlPosition();
    const [isLoadingGeocoding, setIsLoadingGeocoding] = useState(false);

    const [cityName, setCityName] = useState("");
    const [country, setCountry] = useState("");
    const [date, setDate] = useState("");
    const [notes, setNotes] = useState("");
    const [emoji, setEmoji] = useState("");

    const BASE_URL = "https://api.bigdatacloud.net/data/reverse-geocode-client";

    useEffect(() => {
        async function fetchCityData() {
            try {
                setIsLoadingGeocoding(true);
                const res = await fetch(`${BASE_URL}?latitude=${lat}&longitude=${lng}`);
                const data = await res.json();
                console.log(data);
                setCityName(data.city || data.locality || "");
                setCountry(data.countryName);
                setEmoji(convertToEmoji(data.countryCode));
            } catch (err) {
            } finally {
                setIsLoadingGeocoding(false)
            }
        }
        fetchCityData();
    }, [lat, lng]);


    return (
        <section className='newVisitingSection'>
            <main className='newVisitingMainContent'>
                <form action="" className='formSection'>
                    <label className='labelVisiting' htmlFor="cityName">City name</label>
                    <input className='inputVisiting' id="cityName" />

                    <label className='labelVisiting' htmlFor="didgo">Where Did you go ?</label>
                    <input className='inputVisiting' id="didgo" />

                    <label className='labelVisiting' htmlFor="notes">Notes About your trip</label>
                    <textarea className='textVisiting' id="notes" />
                </form>
                <section className='newVisitBottomContent'>
                    <Button>
                        Create new Visit
                    </Button>
                    <Button onClick={goBack} variant='btnBack'>
                        Go Back
                    </Button>
                </section>
            </main>
        </section>
    )
}

export default NewVisiting