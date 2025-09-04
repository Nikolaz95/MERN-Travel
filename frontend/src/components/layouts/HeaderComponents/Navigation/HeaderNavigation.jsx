import React from 'react'
import { NavLink } from 'react-router';

//import css
import "./HeaderNavigation.css";
// import img 
import Product from "../../../../assets/icons/icon-product.png"
import SignIn from "../../../../assets/icons/icon-login.png"
import Image from '../../Images/Image';

const HeaderNavigation = () => {
    return (
        <nav className={`navigationSection active close"`}>
            <ul className="navigationList">
                <li>
                    <NavLink to="/product" className='navigationStyle'>
                        <Image src={Product} alt="here should be a picture" variant="icon" />
                        <p>Product</p>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/signIn" className='navigationStyle'>
                        <p> Sing in</p>
                        <Image src={SignIn} alt="" variant="icon" />
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default HeaderNavigation