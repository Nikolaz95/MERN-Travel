import React from 'react'
import titleName from '../../hooks/useTitle';
import useNavigateTo from '../../hooks/useNavigateTo';

//import css
import "./ErrorPage.css";

/* import img */
import Eror from "../../../assets/icons/icon-error.png"

//import components
import MainLayout from '../../layouts/ContentLayout/MainLayout/MainLayout';
import Button from '../../layouts/Buttons/Button';
import Image from '../../layouts/Images/Image';


const ErrorPage = () => {
    titleName('Error Page');
    const { goBack } = useNavigateTo();
    return (
        <>
            <MainLayout>
                <section className="erorContent">
                    <div className="erorTopContent">
                        <Button onClick={goBack} variant='btnBack'>
                            Go Back
                        </Button>
                    </div>
                    <div className="mainContent">
                        <Image src={Eror} alt="" className='imgEror' />
                        <p className='textEror vibrate-1'>This page not exist</p>
                        <Image src={Eror} alt="" className='imgEror' />
                    </div>
                </section>
            </MainLayout>
        </>
    )
}

export default ErrorPage