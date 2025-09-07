import React, { useState } from 'react'
import { NavLink } from 'react-router'


//import css
import styles from './SignInLeftAside.module.css';

//import  icon
import Show from "../../../../../assets/icons/icon-show.png"
import Hide from "../../../../../assets/icons/icon-hide.png"
import LogIn from "../../../../../assets/icons/icon-login.png"
import CreateAccount from "../../../../../assets/icons/icon-addAccount.png"

//import components
import Button from '../../../../layouts/Buttons/Button'
import Image from '../../../../layouts/Images/Image'

const SignInLeftAside = () => {
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    return (
        <aside className={styles.lefSingIn}>
            <form className={styles.formSingIn}>
                <label htmlFor="mail" className={styles.titleEmain}>Your Email:</label>
                <input type="email" id='mail' className={styles.inputContent} placeholder='fake@email...' />
                <label htmlFor="pwd" className={styles.titlePwd}>Password :</label>
                <section className={styles.paswordContentSingIn}>
                    <input type={showPassword ? "text" : "password"} id='pwd' value={password}
                        className={styles.inputContent}
                        placeholder='password...'
                        onChange={(e) => setPassword(e.target.value)} />
                    <Image variant="icon" title={showPassword ? "Hide password" : "Show password"}
                        src={showPassword ? Hide : Show}
                        onClick={() => setShowPassword(prevState => !prevState)} />
                </section>

                <section className={styles.bottonForm}>
                    <div className={styles.loginSingIn}>
                        <Button variant="loginBtn">
                            <Image src={LogIn} variant="icon" />
                            Log in
                        </Button>
                    </div>
                    <span className={styles.dividerText}>Or:</span>
                    <NavLink to="/registration">
                        <Button variant="createAcc" className={styles.bottonForm}>
                            <Image src={CreateAccount} variant="icon" />
                            Create a New Accoutn
                        </Button>
                    </NavLink>
                </section>
            </form>
        </aside>
    )
}

export default SignInLeftAside  