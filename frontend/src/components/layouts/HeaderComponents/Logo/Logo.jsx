import React from 'react'
import { NavLink } from 'react-router-dom'


//import img
import Logoimg from "../../../../assets/pictures/logo1.png"

//import components
import Image from '../../Images/Image'
import Navigation from '../../NavigatioLinkComponent/Navigation'

const Logo = () => {
    return (
        <Navigation to="/">
            <Image src={Logoimg} variant="logo" alt="Logo" />
        </Navigation>
    )
}

export default Logo