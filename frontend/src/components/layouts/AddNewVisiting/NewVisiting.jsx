import React, { useState, useEffect } from 'react'
import { useUrlPosition } from '../../hooks/useUrlPosition';


//import css
import './NewVisiting.css';
import Button from '../Buttons/Button';
import Flag from '../Flag/Flag';
import { useAddNewVisitListMutation } from '../../../redux/api/visitListApi';
import { convertToEmoji } from '../../../utils/convertToEmoji';
import { CustomDatePicker } from '../../../utils/DatePicker.jsx';
import { useNavigate } from 'react-router';
import { useCreateVisit } from '../../hooks/useCreateVisit.js';

const MAX_LENGTH = 400;
const BASE_URL = "https://api.bigdatacloud.net/data/reverse-geocode-client";

const NewVisiting = () => {
    const navigate = useNavigate();
    const [lat, lng] = useUrlPosition();
    const [isLoadingGeocoding, setIsLoadingGeocoding] = useState(false);

    const [cityName, setCityName] = useState("");
    const [country, setCountry] = useState("");
    const [continent, setContinent] = useState("");
    const [date, setDate] = useState(new Date());
    const [notes, setNotes] = useState("");
    const [flag, setFlag] = useState("");

    const [geocodingError, setGeocodingError] = useState("");

    const [addNewVisitList, { isLoading }] = useAddNewVisitListMutation();

    useEffect(() => {
        async function fetchCityData() {
            try {
                setIsLoadingGeocoding(true);
                setGeocodingError("");

                const res = await fetch(`${BASE_URL}?latitude=${lat}&longitude=${lng}`);
                const data = await res.json();

                if (!data.countryCode)
                    throw new Error(
                        "That doesn't seem to be a city. Click somewhere else 😉"
                    );

                setCityName(data.city || data.locality || "");
                setCountry(data.countryName);
                setContinent(data.continent);
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
    const formData = { cityName, country, flag, date, continent, notes, lat, lng, MAX_LENGTH };

    const { handleSubmit } = useCreateVisit(addNewVisitList, navigate, formData);

    const handleCancel = () => navigate("/travelMap/cities");


    return (
        <section className='newVisit'>
            <h3 className='newVisitTitle'>Add a new trip</h3>

            {isLoadingGeocoding ? (
                <div className='newVisitLocation'>
                    <p className='newVisitLocationHint'>Finding this place...</p>
                </div>
            ) : geocodingError ? (
                <div className='newVisitLocation isError'>
                    <p className='newVisitLocationHint'>{geocodingError}</p>
                </div>
            ) : (
                <>
                    <div className='newVisitLocation'>
                        <Flag emoji={flag} size="lg" />
                        <div>
                            <p className='newVisitLocationCity'>{cityName || "Unknown place"}</p>
                            <p className='newVisitLocationCountry'>{country}{continent && ` · ${continent}`}</p>
                        </div>
                    </div>

                    <form className='newVisitForm' onSubmit={handleSubmit}>
                        <div className='newVisitField'>
                            <label className='travelLabel' htmlFor="cityName">City name</label>
                            <input className='travelInput'
                                id="cityName"
                                value={cityName}
                                onChange={(e) => setCityName(e.target.value)}
                                required maxLength={50} />
                        </div>

                        <div className='newVisitField'>
                            <label className='travelLabel' htmlFor="date-input">When did you go?</label>
                            <CustomDatePicker
                                id="date-input"
                                className='travelInput'
                                wrapperClassName='newVisitDatePicker'
                                selected={date}
                                onChange={(newDate) => setDate(newDate)}
                                maxDate={new Date()}
                                portalId="datepicker-portal"
                                popperClassName="newVisitDatePickerPopper"
                                dateFormat="d MMMM yyyy" />
                        </div>

                        <div className='newVisitField'>
                            <label className='travelLabel' htmlFor="notes">Notes about your trip</label>
                            <textarea className='travelInput'
                                id="notes"
                                value={notes}
                                onChange={(e) => setNotes(e.target.value)}
                                maxLength={MAX_LENGTH}
                                placeholder="What did you see, eat, love? 😊" />
                            <p className='travelCharCounter'>{notes.length}/{MAX_LENGTH}</p>
                        </div>

                        <div className='travelActions'>
                            <Button type="submit" variant="primary" disabled={isLoading}>
                                {isLoading ? "Saving..." : "Save trip"}
                            </Button>
                            <Button type="button" variant="secondary" onClick={handleCancel}>
                                Cancel
                            </Button>
                        </div>
                    </form>
                </>
            )}
        </section>
    )
}

export default NewVisiting
