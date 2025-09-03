import React from 'react'

//import css
import styles from "./HomePageLayout.module.css";

//import components
import VideoBackground from '../../../layouts/VideoBackground/VideoBackground ';

const HomePageLayout = ({ children }) => {
    return (
        <>
            <VideoBackground />
            <section className={styles.contentLayout}>
                {children}
            </section>
        </>
    )
}

export default HomePageLayout