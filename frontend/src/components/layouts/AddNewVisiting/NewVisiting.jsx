import React, { useState, useEffect } from 'react'
import useNavigateTo from '../../hooks/useNavigateTo';
import { useUrlPosition } from '../../hooks/useUrlPosition';
import toast from 'react-hot-toast';


//import css
import './NewVisiting.css';
import Button from '../Buttons/Button';
import { useAddNewVisitListMutation } from '../../../redux/api/visitListApi';
import { convertToEmoji } from '../../../utils/convertToEmoji';
import { CustomDatePicker } from '../../../utils/DatePicker.jsx';
import { useNavigate } from 'react-router';
import { useCreateVisit } from '../../hooks/useCreateVisit.js';

const NewVisiting = () => {
    const { goBack } = useNavigateTo();
    const navigate = useNavigate();
    const [lat, lng] = useUrlPosition();
    const [isLoadingGeocoding, setIsLoadingGeocoding] = useState(false);

    const [cityName, setCityName] = useState("");
    const [country, setCountry] = useState("");
    const [date, setDate] = useState(new Date());
    const [notes, setNotes] = useState("");
    const MAX_LENGTH = 400;
    const trimmedNotes = notes.trim();
    const [flag, setFlag] = useState("");

    const [geocodingError, setGeocodingError] = useState("");

    const BASE_URL = "https://api.bigdatacloud.net/data/reverse-geocode-client";
    const [addNewVisitList, { isLoading, isSuccess, error }] = useAddNewVisitListMutation();

    useEffect(() => {
        async function fetchCityData() {
            try {
                setIsLoadingGeocoding(true);
                setGeocodingError("");

                const res = await fetch(`${BASE_URL}?latitude=${lat}&longitude=${lng}`);
                const data = await res.json();
                console.log(data);

                if (!data.countryCode)
                    throw new Error(
                        "That doesn't seem to be a city. Click somewhere else 😉"
                    );

                setCityName(data.city || data.locality || "");
                setCountry(data.countryName);
                setFlag(convertToEmoji(data.countryCode));
            } catch (err) {
                setGeocodingError(err.message);
            } finally {
                setIsLoadingGeocoding(false)
            }
        }
        fetchCityData();
    }, [lat, lng]);

    // 🌟 Sva stanja i podaci potrebni za slanje forme
    const formData = { cityName, country, flag, date, notes, lat, lng, MAX_LENGTH };

    const { handleSubmit } = useCreateVisit(addNewVisitList, navigate, formData);

    const handleCreateNewVisit = (e) => {
        handleSubmit(e);
    };


    return (
        <section className='newVisitingSection'>
            <main className='newVisitingMainContent'>
                <form action="" className='formSection' onSubmit={handleSubmit}>
                    <label className='labelVisiting' htmlFor="cityName">
                        City name
                    </label>
                    <input className='inputVisiting'
                        id="cityName"
                        value={cityName}
                        onChange={(e) => setCityName(e.target.value)} />
                    <label className='labelVisiting' htmlFor="didgo">
                        Where Did you go ?
                    </label>
                    <CustomDatePicker
                        id="date-input"
                        className='inputVisiting'
                        selected={date}
                        onChange={(newDate) => setDate(newDate)}
                        dateFormat="yyyy-MM-dd" />

                    <label className='labelVisiting' htmlFor="notes">
                        Notes About your trip
                    </label>
                    <textarea className='textVisiting'
                        id="notes"
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                        maxLength={MAX_LENGTH} />
                </form>

                <p className='char-counter'>
                    {trimmedNotes.length === 0 ? 0 : notes.length}/{MAX_LENGTH}
                </p>
                <section className='newVisitBottomContent'>
                    <Button type="submit" disabled={isLoading} onClick={handleCreateNewVisit}>
                        {/* Create new Visit */}
                        {isLoading ? "Saving..." : "Create New Visit"}
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