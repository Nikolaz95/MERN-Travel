import React from 'react'
//import css
import styles from "./MainLayout.module.css";
import VideoBackground from '../../VideoBackground/VideoBackground ';

//import components

const MainLayout = ({ children }) => {
    return (
        <>
            <VideoBackground />
            <section className={styles.contentLayout}>
                {children}
            </section>
        </>
    )
}

export default MainLayout