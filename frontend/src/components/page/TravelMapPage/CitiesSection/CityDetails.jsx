import React, { useState } from 'react'
import { useLocation, useParams, useSearchParams } from 'react-router';
import useNavigateTo from '../../../hooks/useNavigateTo';
import { useUrlPosition } from '../../../hooks/useUrlPosition';
import { useGetVisitListQuery, useUpdateVisitNotesMutation } from '../../../../redux/api/visitListApi';
import { Cancel, UpdNotesImg, SaveUpdate } from '../../../../assets/Icons';
import toast from 'react-hot-toast';


//import css
import './CityDetails.css';
import Button from '../../../layouts/Buttons/Button';
import Loading from '../../../layouts/Loading/Loading';
import Image from '../../../layouts/Images/Image';


const CityDetails = () => {
    const { goBack } = useNavigateTo();
    const { id } = useParams();
    const [searchParams, setSearchParams] = useSearchParams();
    const lat = searchParams.get("lat");
    const lng = searchParams.get("lng");
    const [mapLat, mapLng] = useUrlPosition();
    console.log(mapLat);

    //Fetch Visit list from user
    const { data, isLoading, notes } = useGetVisitListQuery();
    console.log(data);


    // 1. Pristupamo nizu poseta
    const visits = data?.userVisitList || [];
    const city = visits.find((v) => v._id === id);
    const MAX_LENGTH = 400;




    const [updateVisitNotes, { isLoading: isUpdating }] = useUpdateVisitNotesMutation();
    const [updNotes, setUpdNotes] = useState(false);
    const [userNotes, setUserNotes] = useState(city?.notes || "");



    const handleUpdate = async () => {
        // ako je edit mode uključen i klikne "Save Update"
        if (updNotes) {
            try {
                await updateVisitNotes({ id: city._id, notes: userNotes }).unwrap();
                toast.success("Notes updated successfully!");
                setUpdNotes(false);
            } catch (err) {
                toast.error(err?.data?.message || "Failed to update notes!");
                console.error("❌ Error updating notes:", err);
            }
        } else {
            // ako nije edit mode, uključi ga
            setUpdNotes(true);
        }
    };



    const formatDate = (date) => {
        if (!date) return "No date available";
        return new Intl.DateTimeFormat("en", {
            day: "numeric",
            month: "long",
            year: "numeric",
        }).format(new Date(date));
    };



    return (
        <>
            {isLoading ? (
                <Loading />
            ) : (
                <section className='cityDetailsSection'>
                    <main className='cityDetailsMainContent'>
                        <div className="cityDetailsTopContent">
                            <h3>City Name</h3>
                            <div className="cityDetailsTopInnerContent">
                                <h3>{city.flag}</h3>
                                <h3>{city.cityName}</h3>
                            </div>
                        </div>
                        <div className="cityDetailsMiddleContent">
                            <h3>You Went to {city.cityName} on</h3>
                            <time>{formatDate(city.date)}</time>
                        </div>
                        <div className="cityDetailsMiddleContent">
                            <h3>Your Notes:</h3>
                            {(!userNotes || userNotes.trim().length === 0) && !updNotes ? (
                                <p className="emptyNotes">Write something about your journey 😇</p>
                            ) : (
                                <textarea
                                    className="textVisitingUpd"
                                    id="notesUpd"
                                    value={userNotes}
                                    onChange={(e) => setUserNotes(e.target.value)}
                                    readOnly={!updNotes}
                                    disabled={isUpdating}
                                    placeholder="Write something about your journey 😇"
                                />
                            )}
                            <p className='charCounterSection'>
                                {userNotes.length}/{MAX_LENGTH}
                            </p>
                        </div>
                        <div className='bntUpdCncContent'>
                            <Button onClick={handleUpdate} disabled={isUpdating}>
                                <Image src={updNotes ? SaveUpdate : UpdNotesImg} variant="btnIcon" />
                                <p>{updNotes ? "Save Update" : "Update notes"}</p>
                            </Button>
                            {/* ✅ Gumb za cancel se prikazuje samo u edit mode */}
                            {updNotes && (
                                <Button onClick={() => {
                                    setUpdNotes(false);
                                    setUserNotes(city.notes); // vraćamo stare bilješke
                                }}>
                                    <Image src={Cancel} variant="btnIcon" />
                                    <p>Cancel</p>
                                </Button>
                            )}
                        </div>

                        <div className="cityDetailsBottomContent">
                            <h3>Learn More</h3>
                            <a href={`https://en.wikipedia.org/wiki/${city.cityName}`}
                                target="_blank" rel="noreferrer" className='cityLink'>
                                Check out {city.cityName} on Wikipedia </a>
                        </div>
                        <div className="cityDetailsBtn">
                            <Button onClick={goBack} variant='btnBack'>
                                Go Back
                            </Button>
                        </div>
                    </main>

                </section>
            )}
        </>
    )
}

export default CityDetails