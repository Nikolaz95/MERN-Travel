import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './components/layouts/FooterComponents/Footer/Footer'
import Header from './components/layouts/HeaderComponents/Header/Header'
import { Toaster } from 'react-hot-toast';

const Root = () => {
    return (
        <div>
            <Toaster position="top-center" />
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}

export default Root