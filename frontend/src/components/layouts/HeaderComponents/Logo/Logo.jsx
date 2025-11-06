import React from 'react'


//import img
import { Logoimg } from '../../../../assets/Icons'

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