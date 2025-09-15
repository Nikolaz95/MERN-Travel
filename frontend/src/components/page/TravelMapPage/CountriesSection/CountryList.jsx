import React from 'react'
import useFetch from '../../../hooks/useFetch';

//import css
import './CountryList.css';

//import fetch data
import data from '../../../../data/Cities';
import Loading from '../../../layouts/Loading/Loading';

const CountryList = () => {
    const { data: dataInfo, loading, error } = useFetch("/cities");
    console.log("Cities data:", dataInfo);


    const countries = dataInfo?.reduce((arr, cntry) => {
        if (!arr[cntry.country]) {
            arr[cntry.country] = { country: cntry.country, flag: cntry.flag, count: 1 }
        } else {
            arr[cntry.country].count += 1;
        }
        return arr;
    }, {});

    console.log(countries);

    const nbrCountry = countries ? Object.values(countries) : [];
    console.log(nbrCountry);


    return (
        <>
            {loading ? (
                <Loading />
            ) : (
                <>
                    <section className='countryListSection'>
                        <h3 className='countryListaHeader'>Country List : ({nbrCountry.length}) </h3>
                        <section className='countryListaContent'>
                            {dataInfo?.length === 0 ? (
                                <p className="emptyMessage">Start your journey 🚀</p>
                            ) : (
                                nbrCountry?.map((cntry) => (
                                    <div key={cntry.country} className="countryBoxContent">
                                        <div className="topContent">
                                            <span className='countryFlag'>{cntry.flag}</span>
                                            {cntry.count > 1 && (
                                                <span className="nmbrTimes">({cntry.count})</span>
                                            )}
                                        </div>
                                        <h3>{cntry.country}</h3>
                                    </div>
                                ))
                            )}
                        </section>
                    </section>
                </>
            )}
        </>
    )
}

export default CountryList