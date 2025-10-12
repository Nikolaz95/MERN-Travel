import React, { useState } from 'react'
import useFetch from '../../../hooks/useFetch';

//import css
import './CityList.css';

//import components
import Button from '../../../layouts/Buttons/Button';
import Loading from '../../../layouts/Loading/Loading';
import Navigation from '../../../layouts/NavigatioLinkComponent/Navigation';

const CityList = () => {
    const { data: dataInfo, loading, error, position } = useFetch("/cities");
    console.log("Cities data:", dataInfo);

    const formatDate = (date) =>
        new Intl.DateTimeFormat("en", {
            day: "numeric",
            month: "long",
            year: "numeric",
        }).format(new Date(date))

    return (
        <>
            {loading ? (
                <Loading />
            ) : (
                <section className='cityListSection'>
                    <h3 className='citiListaHeader'> CityList : ({dataInfo?.length || 0})</h3>
                    {dataInfo?.length === 0 ? (
                        <p className="emptyMessage">Start your journey 🚀</p>
                    ) : (
                        dataInfo?.map((city) => (
                            <ul key={city.id} className='citiListaContent'>
                                <li className='citiLista'>
                                    <Navigation to={`/travelMap/cities/${city.id}?lat=${city.position.lat}&lng=${city.position.lng}`} >
                                        <div className="citiListaLeft">
                                            <span className='textStyle'>{city.cityName}</span>
                                            <h3 className='textStyle'>{city.country}</h3>
                                        </div>
                                    </Navigation>

                                    <div className="citiListaRight">
                                        <time>({formatDate(city.date)})</time>
                                        <Button variant="remove">x</Button>
                                    </div>
                                </li>
                            </ul>
                        ))
                    )}
                </section >
            )}
        </>
    )
}

export default CityList