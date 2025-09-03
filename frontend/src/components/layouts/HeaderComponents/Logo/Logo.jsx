import React from 'react'
import { NavLink } from 'react-router-dom'


//import img
import Logoimg from "../../../../assets/pictures/logo1.png"

//import components
import Image from '../../Images/Image'

const Logo = () => {
    return (
        <NavLink to="/" className="noUnderline">
            <Image src={Logoimg} variant="logo" alt="Logo" />
        </NavLink>
    )
}

export default Logo