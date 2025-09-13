import React from 'react'
import useNavigateTo from '../../hooks/useNavigateTo';

//import css
import './NewVisiting.css';
import Button from '../Buttons/Button';

const NewVisiting = () => {
    const { goBack } = useNavigateTo();
    return (
        <section className='newVisitingSection'>
            <main className='newVisitingMainContent'>
                <form action="" className='formSection'>
                    <label className='labelVisiting' htmlFor="cityName">City name</label>
                    <input className='inputVisiting' id="cityName" />

                    <label className='labelVisiting' htmlFor="didgo">Where Did you go ?</label>
                    <input className='inputVisiting' id="didgo" />

                    <label className='labelVisiting' htmlFor="notes">Notes About your trip</label>
                    <textarea className='textVisiting' id="notes" />
                </form>
                <section className='newVisitBottomContent'>
                    <Button>
                        Create new Visit
                    </Button>
                    <Button onClick={goBack} variant='btnBack'>
                        Go Back
                    </Button>
                </section>
            </main>
        </section>
    )
}

export default NewVisiting