import React from 'react'


//import css
import styles from './VideoBackground.module.css';

import videoFile from '../../../assets/video/travelWorld1.mp4';



const VideoBackground = () => {
    return (
        <section className={styles.videoBackground}>
            <video autoPlay loop muted playsInline className={styles.video}>
                <source src={videoFile} type="video/mp4" />
            </video>
        </section>
    )
}

export default VideoBackground 