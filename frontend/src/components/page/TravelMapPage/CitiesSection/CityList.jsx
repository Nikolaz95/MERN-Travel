import React, { useState } from 'react'
import useFetch from '../../../hooks/useFetch';

//import css
import './CityList.css';

//import fetch data
import data from '../../../../data/Cities';

//import components
import Button from '../../../layouts/Buttons/Button';

const CityList = () => {
    const { data: dataInfo, loading, error } = useFetch("/cities");
    console.log("Cities data:", dataInfo);



    const formatDate = (date) =>
        new Intl.DateTimeFormat("en", {
            day: "numeric",
            month: "long",
            year: "numeric",
        }).format(new Date(date))

    return (
        <section className='cityListSection'>
            <h3 className='citiListaHeader'>CityList : (4) </h3>
            <ul className='citiListaContent'>
                <li className='citiLista'>
                    <div className="citiListaLeft">
                        <span>ES</span>
                        <h3>Spain</h3>
                    </div>

                    <div className="citiListaRight">
                        <time className="">(2025-09-12)</time>
                        <Button>x</Button>
                    </div>
                </li>

                <li className='citiLista'>
                    <div className="citiListaLeft">
                        <span>ES</span>
                        <h3>Spain</h3>
                    </div>

                    <div className="citiListaRight">
                        <time className="">(2025-09-12)</time>
                        <Button>x</Button>
                    </div>
                </li>

                <li className='citiLista'>
                    <div className="citiListaLeft">
                        <span>ES</span>
                        <h3>Spain</h3>
                    </div>

                    <div className="citiListaRight">
                        <time className="">(2025-09-12)</time>
                        <Button>x</Button>
                    </div>
                </li>

                <li className='citiLista'>
                    <div className="citiListaLeft">
                        <span>ES</span>
                        <h3>Spain</h3>
                    </div>

                    <div className="citiListaRight">
                        <time className="">(2025-09-12)</time>
                        <Button>x</Button>
                    </div>
                </li>

                <li className='citiLista'>
                    <div className="citiListaLeft">
                        <span>ES</span>
                        <h3>Spain</h3>
                    </div>

                    <div className="citiListaRight">
                        <time className="">(2025-09-12)</time>
                        <Button>x</Button>
                    </div>
                </li>

                <li className='citiLista'>
                    <div className="citiListaLeft">
                        <span>ES</span>
                        <h3>Spain</h3>
                    </div>

                    <div className="citiListaRight">
                        <time className="">(2025-09-12)</time>
                        <Button>x</Button>
                    </div>
                </li>

                <li className='citiLista'>
                    <div className="citiListaLeft">
                        <span>ES</span>
                        <h3>Spain</h3>
                    </div>

                    <div className="citiListaRight">
                        <time className="">(2025-09-12)</time>
                        <Button>x</Button>
                    </div>
                </li>

                <li className='citiLista'>
                    <div className="citiListaLeft">
                        <span>ES</span>
                        <h3>Spain</h3>
                    </div>

                    <div className="citiListaRight">
                        <time className="">(2025-09-12)</time>
                        <Button>x</Button>
                    </div>
                </li>

                <li className='citiLista'>
                    <div className="citiListaLeft">
                        <span>ES</span>
                        <h3>Spain</h3>
                    </div>

                    <div className="citiListaRight">
                        <time className="">(2025-09-12)</time>
                        <Button>x</Button>
                    </div>
                </li>

                <li className='citiLista'>
                    <div className="citiListaLeft">
                        <span>ES</span>
                        <h3>Spain</h3>
                    </div>

                    <div className="citiListaRight">
                        <time className="">(2025-09-12)</time>
                        <Button>x</Button>
                    </div>
                </li>

                <li className='citiLista'>
                    <div className="citiListaLeft">
                        <span>ES</span>
                        <h3>Spain</h3>
                    </div>

                    <div className="citiListaRight">
                        <time className="">(2025-09-12)</time>
                        <Button>x</Button>
                    </div>
                </li>

                <li className='citiLista'>
                    <div className="citiListaLeft">
                        <span>ES</span>
                        <h3>Spain</h3>
                    </div>

                    <div className="citiListaRight">
                        <time className="">(2025-09-12)</time>
                        <Button>x</Button>
                    </div>
                </li>

                <li className='citiLista'>
                    <div className="citiListaLeft">
                        <span>ES</span>
                        <h3>Spain</h3>
                    </div>

                    <div className="citiListaRight">
                        <time className="">(2025-09-12)</time>
                        <Button>x</Button>
                    </div>
                </li>

                <li className='citiLista'>
                    <div className="citiListaLeft">
                        <span>ES</span>
                        <h3>Spain</h3>
                    </div>

                    <div className="citiListaRight">
                        <time className="">(2025-09-12)</time>
                        <Button>x</Button>
                    </div>
                </li>

                <li className='citiLista'>
                    <div className="citiListaLeft">
                        <span>ES</span>
                        <h3>Spain</h3>
                    </div>

                    <div className="citiListaRight">
                        <time className="">(2025-09-12)</time>
                        <Button>x</Button>
                    </div>
                </li>
            </ul>
        </section>
    )
}

export default CityList