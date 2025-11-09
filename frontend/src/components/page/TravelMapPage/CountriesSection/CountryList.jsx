import React from 'react'
import useFetch from '../../../hooks/useFetch';

//import css
import './CountryList.css';

//import fetch data
import data from '../../../../data/Cities';
import Loading from '../../../layouts/Loading/Loading';
import { useGetVisitListQuery } from '../../../../redux/api/visitListApi';

const CountryList = () => {
    //Fetch Visit list from user
    const { data, isLoading } = useGetVisitListQuery();
    console.log(data);

    const visits = data?.userVisitList || [];
    console.log(visits);


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

    console.log(countriesObject);

    const nbrCountry = Object.values(countriesObject);
    console.log(nbrCountry);

    return (
        <>
            {isLoading ? (
                <Loading />
            ) : (
                <>
                    <section className='countryListSection'>
                        <h3 className='countryListaHeader'>Country List : ({nbrCountry.length}) </h3>
                        <section className='countryListaContent'>
                            {nbrCountry?.length === 0 ? (
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
                                        <h3>{cntry.country.substring(0, 6)}</h3>
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