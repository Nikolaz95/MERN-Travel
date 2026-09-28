import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './components/layouts/FooterComponents/Footer/Footer'
import Header from './components/layouts/HeaderComponents/Header/Header'
import { Toaster } from 'react-hot-toast';

const Root = () => {
    return (
        <div className="appLayout">
            <Toaster position="top-center" />
            <Header />
            <div className="appContent">
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}

export default Root
