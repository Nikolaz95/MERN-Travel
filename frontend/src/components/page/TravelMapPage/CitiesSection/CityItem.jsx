import React, { useState } from 'react'


//import css
import './CityItem.css';

//import components
import Loading from '../../../layouts/Loading/Loading';
import Button from '../../../layouts/Buttons/Button';



const CityItem = ({ city }) => {
    const { cityName, flag, date, id, position } = city;
    const [isLoading, setIsLoading] = useState(false);

    const formatDate = (date) =>
        new Intl.DateTimeFormat("en", {
            day: "numeric",
            month: "long",
            year: "numeric",
        }).format(new Date(date))

    if (isLoading) return <Loading />;
    return (
        <li className='citiItem'>
            <div className="citiItemLeft">
                <span className='citiItemFlag'>{city.flag}</span>
                <h3>{city.cityName}</h3>
            </div>
            <div className="citiItemRight"></div>
            <time>({formatDate(city.date)})</time>
            <Button variant="delete">X</Button>
        </li>
    )
}

export default CityItem