import React from 'react'

//import css
import styles from './Image.module.css';


const Image = ({ src, alt, variant, onClick, className = '', title, ...props }) => {
    return (
        <img src={src} alt={alt} onClick={onClick} title={title}
            className={`${styles.imageComponent} ${variant ? styles[variant] : ''} ${className}`}
            {...props}
        />
    )
}

export default Image