import React from 'react'
import { NavLink } from 'react-router'
import titleName from '../../../components/hooks/useTitle';


//import css
import styles from './HomePage.module.css';

//import  icon
import { travelTracker } from '../../../assets/Icons';

//import components
import Button from '../../layouts/Buttons/Button';
import MainLayout from '../../layouts/ContentLayout/MainLayout/MainLayout';
import Navigation from '../../layouts/NavigatioLinkComponent/Navigation';



const HomePage = () => {
    titleName('Home Page');
    return (
        <>
            <MainLayout>
                <main className={styles.mainHomePage} >
                    <section className={styles.contentHomePage} >
                        <h1 className={styles.homeTextHeaderH1}>Your Adventures, Your Story.</h1>
                        <h2 className={styles.homeTextHeaderH2}>Capture Your Journey.</h2>
                        <p className={styles.homeTextContent}>Document your travels, one memory at a time.</p>
                        <p className={styles.homeTextContent}>A digital diary for your wanderlust. Discover amazing places with us. Start your travel story today.</p>
                        <Navigation to="/travelMap">
                            <Button variant="startTracking" icon={travelTracker}>
                                <p>Start Tracking Now</p>
                            </Button>
                        </Navigation>
                    </section>
                </main>
            </MainLayout></>
    )
}

export default HomePage