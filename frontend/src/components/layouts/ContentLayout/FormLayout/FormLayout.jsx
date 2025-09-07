import React from 'react'

//import css
import styles from './FormLayout.module.css';

const FormLayout = ({ children }) => {
    return (
        <section className={styles.SignInRegSection}>
            <main className={styles.SignInRegSectionContent}>
                {children}
            </main>
        </section>
    )
}

export default FormLayout