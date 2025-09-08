import React, { useState } from 'react'


//import css
import './CityItem.css';

//import components
import Loading from '../../../layouts/Loading/Loading';
import Button from '../../../layouts/Buttons/Button';



const CityItem = ({ city }) => {
    const { cityName, flag, date, id, position } = city;
    const [isLoading, setIsLoading] = useState(false);

    if (isLoading) return <Loading />;
    return (
        <li className='citiItem'>
            <div className="citiItemLeft">
                <span className='citiItemFlag'>{city.flag}</span>
                <h3>{city.cityName}</h3>
            </div>
            <div className="citiItemRight"></div>
            <time>{city.date}</time>
            <Button variant="delete">
                X
            </Button>
        </li>
    )
}

export default CityItem