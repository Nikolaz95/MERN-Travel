import React, { useState } from 'react'
import useFetch from '../../../hooks/useFetch';
import toast from 'react-hot-toast';

//import css
import './CityList.css';

//import components
import Button from '../../../layouts/Buttons/Button';
import Loading from '../../../layouts/Loading/Loading';
import Navigation from '../../../layouts/NavigatioLinkComponent/Navigation';
import { useGetVisitListQuery, useRemoveFromVisitListMutation } from '../../../../redux/api/visitListApi';
import Image from '../../../layouts/Images/Image';
import { Cancel } from '../../../../assets/Icons';

const CityList = () => {
    //Fetch Visit list from user
    const { data, isLoading } = useGetVisitListQuery();
    console.log(data);

    const [removeVisit, { isLoading: isDeleting }] = useRemoveFromVisitListMutation();

    const handleDelete = (visitId, cityName) => async () => {
        try {
            await removeVisit(visitId).unwrap();
            toast.success(`Visit from ${cityName} successfully deleted!`);
        } catch (error) {
            console.error("Brisanje nije uspelo:", error);
            toast.error(`Visit from ${cityName} didnt remove !`);
        }
    };


    const formatDate = (date) =>
        new Intl.DateTimeFormat("en", {
            day: "numeric",
            month: "long",
            year: "numeric",
        }).format(new Date(date))

    return (
        <>
            {isLoading ? (
                <Loading />
            ) : (
                <section className='cityListSection'>
                    <h3 className='citiListaHeader'> CityList : ({data?.userVisitList?.length || 0})</h3>
                    {data?.userVisitList?.length === 0 ? (
                        <p className="emptyMessage">Start your journey 🚀</p>
                    ) : (
                        data?.userVisitList?.map((city) => (
                            <ul key={city._id} className='citiListaContent'>
                                <li className='citiLista'>
                                    <Navigation to={`/travelMap/cities/${city._id}?lat=${city.position.lat}&lng=${city.position.lng}`} >
                                        <div className="citiListaLeft">
                                            <span className='textStyle'>{city.cityName}</span>
                                            <h3 className='textStyle'>{city.country}</h3>
                                        </div>
                                    </Navigation>

                                    <div className="citiListaRight">
                                        <time>({formatDate(city.date)})</time>
                                        <Button variant="btnModal" onClick={handleDelete(city._id, city.cityName)}>
                                            <Image src={Cancel} variant="btnIcon" />
                                        </Button>
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