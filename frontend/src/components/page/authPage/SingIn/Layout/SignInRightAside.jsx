import React from 'react'



//import css
import styles from './SignInRightAside.module.css';

const benefits = [
    {
        title: "Pin your adventures",
        text: "Mark every city you visit on an interactive map.",
    },
    {
        title: "Keep your memories",
        text: "Add dates and notes to each trip so no story gets forgotten.",
    },
    {
        title: "See how far you've gone",
        text: "Browse all the cities and countries you've explored in one place.",
    },
];

const SignInRightAside = ({ title = "Your free travel diary" }) => {
    return (
        <aside className={styles.rightSingIn}>
            <h2 className={styles.registeringHeader}>{title}</h2>
            <ul className={styles.benefitList}>
                {benefits.map((benefit) => (
                    <li key={benefit.title} className={styles.benefitItem}>
                        <h3 className={styles.registeringTitle}>{benefit.title}</h3>
                        <p className={styles.registeringText}>{benefit.text}</p>
                    </li>
                ))}
            </ul>
        </aside>
    )
}

export default SignInRightAside
