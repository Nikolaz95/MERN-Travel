import React, { useCallback, useEffect, useRef, useState } from 'react'

//import css
import styles from './Header.module.css';

//import components
import Logo from '../Logo/Logo';
import HeaderNavigation from '../Navigation/HeaderNavigation';
import HamMenu from '../HamMenu/HamMenu';

//import hooks
import useClickOutside from '../../../hooks/useClickOutside';

const MOBILE_QUERY = '(max-width: 700px)';

const Header = () => {
    const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
    const navRef = useRef(null);
    const hamRef = useRef(null);

    const toggleSideMenu = () => setIsSideMenuOpen((prev) => !prev);
    const closeSideMenu = useCallback(() => setIsSideMenuOpen(false), []);

    // Close sidebar on click outside or Escape
    useClickOutside([navRef, hamRef], closeSideMenu, isSideMenuOpen);

    // Prevent page scrolling while sidebar is open
    useEffect(() => {
        document.body.classList.toggle('no-scroll', isSideMenuOpen);
        return () => document.body.classList.remove('no-scroll');
    }, [isSideMenuOpen]);

    // Close sidebar when the screen grows to desktop size
    useEffect(() => {
        const media = window.matchMedia(MOBILE_QUERY);
        const handleChange = (e) => {
            if (!e.matches) closeSideMenu();
        };
        media.addEventListener('change', handleChange);
        return () => media.removeEventListener('change', handleChange);
    }, [closeSideMenu]);

    return (
        <header className={styles.header}>
            <section className={styles.contentHeader}>
                <Logo />
                <HeaderNavigation ref={navRef} isSideMenuOpen={isSideMenuOpen} closeSideMenu={closeSideMenu} />
                <HamMenu ref={hamRef} toggleSideMenu={toggleSideMenu} isSideMenuOpen={isSideMenuOpen} />
            </section>
            <div className={`${styles.backdrop} ${isSideMenuOpen ? styles.backdropVisible : ''}`} aria-hidden="true" />
        </header>
    )
}

export default Header
