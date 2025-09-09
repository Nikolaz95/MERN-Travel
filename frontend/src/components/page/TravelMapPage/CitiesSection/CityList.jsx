import React, { useState } from 'react'


//import css
import './CityList.css';

//import fetch data
import data from '../../../../data/Cities';

//import components
import CityItem from './CityItem';
import Button from '../../../layouts/Buttons/Button';

const CityList = () => {

    const citiData = data;
    console.log(citiData);
    const [cities, setCities] = useState([]);

    const formatDate = (date) =>
        new Intl.DateTimeFormat("en", {
            day: "numeric",
            month: "long",
            year: "numeric",
        }).format(new Date(date))

    return (
        <section className='cityListSection'>
            <h3 className='citiListaHeader'>CityList : ({data.length}) </h3>
            <ul className='citiListaContent'>
                {data.map((city) => (
                    <li className='citiItem'>
                        <div className="citiItemLeft">
                            <span className='citiItemFlag'>{city.flag}</span>
                            <h3>{city.cityName}</h3>
                        </div>
                        <div className="citiItemRight"></div>
                        <time>({formatDate(city.date)})</time>
                        <Button variant="delete">X</Button>
                    </li>
                ))}
            </ul>
        </section>
    )
}

export default CityList