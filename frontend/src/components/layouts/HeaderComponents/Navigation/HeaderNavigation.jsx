import React from 'react'
import { useNavigate } from 'react-router';
import toast from 'react-hot-toast';

//import css
import "./HeaderNavigation.css";
// import img
import { LogInImg, Product } from '../../../../assets/Icons';


// import components
import Image from '../../Images/Image';
import UserNavigationBar from './UserNavigationBar';
import Navigation from '../../NavigatioLinkComponent/Navigation';
import { useGetMeQuery } from '../../../../redux/api/userApi';
import { useSelector } from 'react-redux';
import { useLazyLogoutQuery } from '../../../../redux/api/authApi';

const HeaderNavigation = ({ ref, isSideMenuOpen, closeSideMenu }) => {
    const navigate = useNavigate();
    const { isLoading } = useGetMeQuery();
    const [logout] = useLazyLogoutQuery();

    const { user } = useSelector((state) => state.auth);


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
        <nav ref={ref} id="main-navigation" aria-label="Main navigation"
            className={`navigationSection ${isSideMenuOpen ? "isOpen" : ""}`}>
            <ul className="navigationList">
                <li>
                    <Navigation to="/product" variant='headNavigation' onClick={closeSideMenu}>
                        <Image src={Product} alt="" variant="navIcon" />
                        Product
                    </Navigation>
                </li>

                {user ? (
                    <UserNavigationBar user={user} handleLogOut={handleLogOut} closeSideMenu={closeSideMenu} />
                ) : (
                    !isLoading && (
                        <li>
                            <Navigation to="/signIn" variant='headNavigation' onClick={closeSideMenu}>
                                <Image src={LogInImg} alt="" variant="navIcon" />
                                Sign in
                            </Navigation>
                        </li>
                    )
                )}
            </ul>
        </nav>
    )
}

export default HeaderNavigation
