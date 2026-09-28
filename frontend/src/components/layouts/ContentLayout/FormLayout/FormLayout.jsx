import React from 'react'

//import css
import styles from './FormLayout.module.css';

//import components
import VideoBackground from '../../VideoBackground/VideoBackground ';

// Card for the Sign In / Register pages: form on the left, `aside` on the right
const FormLayout = ({ children, aside }) => {
    return (
        <>
            <VideoBackground />
            <section className={styles.authSection}>
                <div className={styles.authCard}>
                    <div className={styles.authFormPanel}>
                        {children}
                    </div>
                    {aside}
                </div>
            </section>
        </>
    )
}

export default FormLayout
