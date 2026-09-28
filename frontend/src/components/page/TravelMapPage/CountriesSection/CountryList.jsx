import React from 'react'

//import css
import './CountryList.css';

import Loading from '../../../layouts/Loading/Loading';
import Flag from '../../../layouts/Flag/Flag';
import { useGetVisitListQuery } from '../../../../redux/api/visitListApi';

const CountryList = () => {
    //Fetch Visit list from user
    const { data, isLoading } = useGetVisitListQuery();

    const visits = data?.userVisitList || [];


    const countriesObject = visits.reduce((arr, cntry) => {
        // 💡 Koristimo 'countryName' jer se tako zove ključ u vašem API odgovoru
        const countryKey = cntry.countryName;

        if (!arr[countryKey]) {
            arr[countryKey] = {
                country: countryKey,
                flag: cntry.flag, // Zastavica je dostupna na svakom objektu posete
                count: 1
            };
        } else {
            arr[countryKey].count += 1;
        }
        return arr;
    }, {});

    // most visited first
    const countries = Object.values(countriesObject)
        .sort((a, b) => b.count - a.count || a.country.localeCompare(b.country));


    if (isLoading) return <Loading />;

    if (countries.length === 0) {
        return (
            <div className="travelEmpty">
                <span className="travelEmptyIcon">🌍</span>
                <p className="travelEmptyTitle">No countries yet</p>
                <p className="travelEmptyText">Countries appear here as soon as you add a place on the map.</p>
            </div>
        );
    }

    return (
        <ul className='countryGrid'>
            {countries.map((cntry) => (
                <li key={cntry.country} className="countryTile">
                    <Flag emoji={cntry.flag} size="lg" />
                    <p className="countryTileName" title={cntry.country}>{cntry.country}</p>
                    <span className="countryTileCount">
                        {cntry.count} {cntry.count === 1 ? "visit" : "visits"}
                    </span>
                </li>
            ))}
        </ul>
    )
}

export default CountryList
