import React from 'react'
import titleName from '../../hooks/useTitle';
import useNavigateTo from '../../hooks/useNavigateTo';

//import css
import styles from './ErrorPage.module.css';

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
                <section className={styles.erorContent}>
                    <div className={styles.erorTopContent}>
                        <Button onClick={goBack} variant='btnBack'>
                            Go Back
                        </Button>
                    </div>
                    <div className={styles.mainContent} >
                        <Image src={Eror} alt="" className='imgEror' />
                        <p className={`${styles.textEror} ${styles.vibrate1}`}>This page not exist</p>
                        <Image src={Eror} alt="" className='imgEror' />
                    </div>
                </section>
            </MainLayout >
        </>
    )
}

export default ErrorPage