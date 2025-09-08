import React, { useState } from 'react'


//import css
import './CityList.css';

//import fetch data
import data from '../../../../data/Cities';
import CityItem from './CityItem';

const CityList = () => {

    const citiData = data;
    console.log(citiData);
    const [cities, setCities] = useState([]);

    return (
        <section className='cityListSection'>
            <h3 className='citiListaHeader'>CityList : ({data.length}) </h3>
            <ul className='citiListaContent'>
                {data.map((city) => (
                    <CityItem city={city} key={city.id} />
                ))}
            </ul>
        </section>
    )
}

export default CityList