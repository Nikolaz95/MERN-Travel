import React from 'react'

//import css
import styles from './Button.module.css';

const Button = ({ onClick, children, variant, icon, active }) => {
    return (
        <button onClick={onClick}
            className={`${styles.button} ${styles[variant]} ${active ? styles.active : styles.notActive}`}>
            {icon && <img src={icon} className="iconBtns" alt="icon" />}
            {children}
        </button>
    )
}

export default Button