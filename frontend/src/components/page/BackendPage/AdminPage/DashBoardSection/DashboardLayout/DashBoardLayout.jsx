import React, { useCallback, useEffect, useRef, useState } from 'react'

//import css
import './DashBoardLayout.css';

import Sidebar from '../SideBar/Sidebar';
import useClickOutside from '../../../../../hooks/useClickOutside';

const MOBILE_QUERY = '(max-width: 900px)';

const DashBoardLayout = ({ title, subtitle, children }) => {
    // mobile only: sidebar drawer
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const sidebarRef = useRef(null);
    const menuBtnRef = useRef(null);

    const closeSidebar = useCallback(() => setIsSidebarOpen(false), []);

    // Close drawer on click outside or Escape
    useClickOutside([sidebarRef, menuBtnRef], closeSidebar, isSidebarOpen);

    // Prevent page scrolling while the drawer is open
    useEffect(() => {
        document.body.classList.toggle('no-scroll', isSidebarOpen);
        return () => document.body.classList.remove('no-scroll');
    }, [isSidebarOpen]);

    // Close drawer when the screen grows to desktop size
    useEffect(() => {
        const media = window.matchMedia(MOBILE_QUERY);
        const handleChange = (e) => {
            if (!e.matches) closeSidebar();
        };
        media.addEventListener('change', handleChange);
        return () => media.removeEventListener('change', handleChange);
    }, [closeSidebar]);

    return (
        <section className="dashLayout">
            <Sidebar ref={sidebarRef} isOpen={isSidebarOpen} onClose={closeSidebar} />
            <div className={`dashBackdrop ${isSidebarOpen ? "isVisible" : ""}`} aria-hidden="true" />

            <main className="dashMain">
                <div className="dashTopbar">
                    <button ref={menuBtnRef} type="button" className="dashMenuBtn"
                        onClick={() => setIsSidebarOpen((prev) => !prev)}
                        aria-expanded={isSidebarOpen} aria-controls="dashboard-sidebar">
                        <span aria-hidden="true">☰</span> Menu
                    </button>
                </div>

                {title && (
                    <header className="dashPageHeader">
                        <h1 className="dashPageTitle">{title}</h1>
                        {subtitle && <p className="dashPageSubtitle">{subtitle}</p>}
                    </header>
                )}

                {children}
            </main>
        </section>
    )
}

export default DashBoardLayout
