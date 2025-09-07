import React from 'react'



//import css
import styles from './SignInRightAside.module.css';

const SignInRightAside = () => {
    return (
        <aside className={styles.rightSingIn} >
            <h1 className={styles.registeringTitle}>Benefits of your free  account</h1>
            <p className={styles.registeringText} >Personalized Recommendations</p>
            <h1 className={styles.registeringTitle} >Your Watchlist</h1>
            <p className={styles.registeringText} >Track everything you want to watch and receive e-mail when movies open in theaters.</p>
            <h1 className={styles.registeringTitle}>Your Favorit list</h1>
            <p className={styles.registeringText}>Track everything you want to watch and receive e-mail when movies open in theaters.</p>
        </aside>
    )
}

export default SignInRightAside