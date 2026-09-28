import React from 'react'

//import css
import styles from './Button.module.css';

const Button = ({ onClick, className = '', children, variant, icon, active, ...rest }) => {
    return (
        <button onClick={onClick} {...rest}
            className={`${styles.button} ${styles[variant]} ${active ? styles.active : styles.notActive}`}>
            {icon && <img src={icon} className={`${className}`} alt="icon" />}
            {children}
        </button>
    )
}

export default Button
