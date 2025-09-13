import React from 'react'
import { useLocation, useParams, useSearchParams } from 'react-router';
import useNavigateTo from '../../../hooks/useNavigateTo';


//import css
import './CityDetails.css';
import Button from '../../../layouts/Buttons/Button';
import useFetch from '../../../hooks/useFetch';
import Loading from '../../../layouts/Loading/Loading';


const CityDetails = () => {
    const { goBack } = useNavigateTo();
    const { id } = useParams();
    const [searchParams, setSearchParams] = useSearchParams();
    const lat = searchParams.get("lat");
    const lng = searchParams.get("lng");

    const { data: city, loading, error } = useFetch(`/cities/${id}`);


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
            {loading ? (
                <Loading />
            ) : (
                <section className='cityDetailsSection'>
                    <main className='cityDetailsMainContent'>
                        <div className="cityDetailsTopContent">
                            <h1>City Name</h1>
                            <div className="cityDetailsTopInnerContent">
                                <h3>{city.flag}</h3>
                                <h1>{city.cityName}</h1>
                            </div>
                        </div>
                        <div className="cityDetailsMiddleContent">
                            <h3>You Went to {city.cityName} on</h3>
                            <time>{formatDate(city.date)}</time>
                        </div>
                        <div className="cityDetailsMiddleContent">
                            <h3>Your Notes:</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit voluptas, corporis id esse debitis eum beatae necessitatibus excepturi voluptates similique!</p>
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