import React, { useState } from 'react'
import { useParams } from 'react-router';
import { useGetVisitListQuery, useUpdateVisitNotesMutation } from '../../../../redux/api/visitListApi';
import toast from 'react-hot-toast';


//import css
import './CityDetails.css';
import Button from '../../../layouts/Buttons/Button';
import Loading from '../../../layouts/Loading/Loading';
import Navigation from '../../../layouts/NavigatioLinkComponent/Navigation';
import Flag from '../../../layouts/Flag/Flag';
import { formatDate } from '../../../../utils/formatDate';

const MAX_LENGTH = 400;


const CityDetails = () => {
    const { id } = useParams();

    //Fetch Visit list from user
    const { data, isLoading } = useGetVisitListQuery();
    const city = data?.userVisitList?.find((v) => v._id === id);

    if (isLoading) return <Loading />;

    if (!city) {
        return (
            <div className="travelEmpty">
                <span className="travelEmptyIcon">🧭</span>
                <p className="travelEmptyTitle">Visit not found</p>
                <Navigation to="/travelMap/cities" variant="cityBackLink">← Back to all cities</Navigation>
            </div>
        );
    }

    // `key` resets the notes state when switching to another city
    return <CityDetailsContent key={city._id} city={city} />;
}


const CityDetailsContent = ({ city }) => {
    const [updateVisitNotes, { isLoading: isUpdating }] = useUpdateVisitNotesMutation();
    const [isEditing, setIsEditing] = useState(false);
    const [userNotes, setUserNotes] = useState(city.notes || "");


    const handleSave = async () => {
        try {
            await updateVisitNotes({ id: city._id, notes: userNotes }).unwrap();
            toast.success("Notes updated successfully!");
            setIsEditing(false);
        } catch (err) {
            toast.error(err?.data?.message || "Failed to update notes!");
            console.error("❌ Error updating notes:", err);
        }
    };

    const handleCancel = () => {
        setIsEditing(false);
        setUserNotes(city.notes || ""); // vraćamo stare bilješke
    };


    return (
        <article className='cityDetails'>
            <Navigation to="/travelMap/cities" variant="cityBackLink">← All cities</Navigation>

            <header className="cityDetailsHeader">
                <Flag emoji={city.flag} size="lg" />
                <div className="cityDetailsHeaderText">
                    <h3 className="cityDetailsName">{city.cityName}</h3>
                    <p className="cityDetailsCountry">
                        {city.countryName}{city.continent && ` · ${city.continent}`}
                    </p>
                </div>
            </header>

            <div className="cityDetailsCard">
                <p className="travelLabel">📅 Visited on</p>
                <time dateTime={city.date} className="cityDetailsDate">{formatDate(city.date)}</time>
            </div>

            <div className="cityDetailsCard">
                <label htmlFor="notesUpd" className="travelLabel">📝 Your notes</label>
                {isEditing ? (
                    <>
                        <textarea
                            className="travelInput"
                            id="notesUpd"
                            value={userNotes}
                            onChange={(e) => setUserNotes(e.target.value)}
                            maxLength={MAX_LENGTH}
                            disabled={isUpdating}
                            placeholder="Write something about your journey 😇"
                            autoFocus
                        />
                        <p className='travelCharCounter'>{userNotes.length}/{MAX_LENGTH}</p>
                        <div className='travelActions'>
                            <Button type="button" variant="primary" onClick={handleSave} disabled={isUpdating}>
                                {isUpdating ? "Saving..." : "Save notes"}
                            </Button>
                            <Button type="button" variant="secondary" onClick={handleCancel} disabled={isUpdating}>
                                Cancel
                            </Button>
                        </div>
                    </>
                ) : (
                    <>
                        {userNotes.trim() ? (
                            <p className="cityDetailsNotes">{userNotes}</p>
                        ) : (
                            <p className="cityDetailsNotesEmpty">No notes yet. Write something about your journey 😇</p>
                        )}
                        <Button type="button" variant="secondary" onClick={() => setIsEditing(true)}>
                            ✏️ {userNotes.trim() ? "Edit notes" : "Add notes"}
                        </Button>
                    </>
                )}
            </div>

            <a href={`https://en.wikipedia.org/wiki/${encodeURIComponent(city.cityName)}`}
                target="_blank" rel="noopener noreferrer" className='cityDetailsWiki'>
                Read about {city.cityName} on Wikipedia ↗
            </a>
        </article>
    )
}

export default CityDetails
