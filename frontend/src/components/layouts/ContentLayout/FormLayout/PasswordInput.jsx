import React, { useState } from 'react'

//import css
import styles from './AuthForm.module.css';

//import icon
import { HidePassword, ShowPassword } from '../../../../assets/Icons';

//import components
import Image from '../../Images/Image';

const PasswordInput = (props) => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className={styles.passwordWrapper}>
            <input type={showPassword ? "text" : "password"} className={styles.input} {...props} />
            <button type="button" className={styles.passwordToggle}
                onClick={() => setShowPassword(prevState => !prevState)}
                aria-label={showPassword ? "Hide password" : "Show password"}
                title={showPassword ? "Hide password" : "Show password"}>
                <Image src={showPassword ? HidePassword : ShowPassword} alt="" variant="passwordIcon" />
            </button>
        </div>
    )
}

export default PasswordInput
