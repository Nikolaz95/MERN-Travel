import React from 'react'
import { NavLink } from 'react-router'
import titleName from '../../../components/hooks/useTitle';


//import  icon
import travelTracker from "../../../assets/icons/icon-location.png"
//css
import './HomePage.css';
import Button from '../../layouts/Buttons/Button';
import MainLayout from '../../layouts/ContentLayout/MainLayout/MainLayout';


//import components

const HomePage = () => {
    titleName('Home Page');
    return (
        <>
            <MainLayout>
                <main className="mainHomePage">
                    <section className="contentHomePage">
                        <h1 className="homeTextHeaderH1">Your Adventures, Your Story.</h1>
                        <h2 className="homeTextHeaderH2">Capture Your Journey.</h2>
                        <p className="homeTextContent">Document your travels, one memory at a time. A digital diary for your wanderlust. Discover amazing places with us. Start your travel story today.</p>
                        <NavLink to="/travelMap" className="navLink">
                            <Button variant="startTracking"
                                icon={travelTracker}>
                                <p>Start Tracking Now</p>
                            </Button>
                        </NavLink>
                    </section>
                </main>
            </MainLayout></>
    )
}

export default HomePage