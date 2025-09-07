import React from 'react'
import titleName from '../../../components/hooks/useTitle';


//import css
import styles from './Product.module.css';

//import  icon
import productImg from "../../../assets/pictures/vintage-collage-wall-stockcake.jpg"

//import components
import MainLayout from '../../layouts/ContentLayout/MainLayout/MainLayout';
import Image from '../../layouts/Images/Image';

const Product = () => {
    titleName('Product');
    return (
        <>
            <MainLayout>
                <main className={styles.mainProduct} >
                    <section className={styles.contentProduct}>
                        <div className={styles.contentProductLeft}>
                            <Image src={productImg} variant="productImg" alt="" />
                        </div>
                        <div className={styles.contentProductRight}>
                            <h1 className={styles.aboutUsTextHeader}>About Us</h1>
                            <div className={styles.productTextContent}>
                                <p className={styles.aboutUsText}>At Travel Diary, we’re passionate about helping travelers capture the essence of their journeys. Our app was built with the simple idea that each trip is a story worth sharing. </p>
                                <p className={styles.aboutUsText}>We provide an easy-to-use platform where travelers can check in to places they’ve explored, write about their experiences, and preserve memories from every corner of the world. Whether you're an intrepid globetrotter or just love discovering new places, Travel Diary is here to help you create a personal travel log that celebrates every adventure.</p>
                                <p className={styles.aboutUsText}>Join us, and let’s turn every journey into a story to remember!</p>
                            </div>
                        </div>
                    </section>
                </main>
            </MainLayout>
        </>
    )
}

export default Product