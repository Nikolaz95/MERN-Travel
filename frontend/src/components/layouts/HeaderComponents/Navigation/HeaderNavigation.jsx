import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router';

//import css
import "./HeaderNavigation.css";
// import img 
import Product from "../../../../assets/icons/icon-product.png"
import AvatarDefoult from "../../../../assets/icons/avatar-profile.jpg";

// import components
import Image from '../../Images/Image';
import UserNavigationBar from './UserNavigationBar';
import Navigation from '../../NavigatioLinkComponent/Navigation';
import { LogInImg } from '../../../../assets/Icons';
import { useGetMeQuery } from '../../../../redux/api/userApi';
import { useSelector } from 'react-redux';
import { useLazyLogoutQuery } from '../../../../redux/api/authApi';

const HeaderNavigation = ({ isSideMenuOpen }) => {
    const navigate = useNavigate();
    const [dropdownUser, setDropdownUser] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const { isLoading } = useGetMeQuery();
    const [logout] = useLazyLogoutQuery();

    const { user } = useSelector((state) => state.auth);

    /*  console.log(data); */


    const handleToggleDropdown = () => {
        setDropdownUser(!dropdownUser);
    };

    // Prevent scrolling when menu is open
    useEffect(() => {
        if (isSideMenuOpen) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }
        return () => document.body.classList.remove('no-scroll');
    }, [isSideMenuOpen]);


    const handleLogOut = async () => {
        try {
            await logout().unwrap();
            localStorage.removeItem('token');
            navigate("/", { replace: true }); // Replace in history
            window.location.reload(); // Force full reset if needed
        } catch (err) {
            toast.error(err?.data?.message || "Logout failed");
        }
    };


    return (
        <nav className={`navigationSection ${isSideMenuOpen ? "active" : "close"}`}>
            <ul className="navigationList">
                <li>
                    <Navigation to="/product" variant='headNavigation'>
                        <Image src={Product} alt="here should be a picture" variant="navIcon" />
                        Product
                    </Navigation>
                </li>

                {user ? (
                    <UserNavigationBar user={user} handleLogOut={handleLogOut} />
                ) : (
                    !isLoading && (
                        <li>
                            <Navigation to="/signIn" variant='headNavigation'>
                                <Image src={LogInImg} alt="" variant="navIcon" />
                                Sing in
                            </Navigation>
                        </li>
                    )
                )}
            </ul>
        </nav>
    )
}

export default HeaderNavigation