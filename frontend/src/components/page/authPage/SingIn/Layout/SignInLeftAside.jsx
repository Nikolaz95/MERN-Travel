import React, { useState } from 'react'
import { NavLink } from 'react-router'


//import css
import styles from './SignInLeftAside.module.css';

//import  icon
import { CreateAccount, HidePassword, LogInImg, ShowPassword } from '../../../../../assets/Icons';


//import components
import Button from '../../../../layouts/Buttons/Button'
import Image from '../../../../layouts/Images/Image'
import Navigation from '../../../../layouts/NavigatioLinkComponent/Navigation';

const SignInLeftAside = ({ submitHandler, setFormData, formData, isLoading }) => {
    const [showPassword, setShowPassword] = useState(false);
    return (
        <aside className={styles.lefSingIn}>
            <form className={styles.formSingIn} onSubmit={submitHandler}>
                <label htmlFor="mail" className={styles.titleEmain}>Your Email:</label>

                <input type="email" id='mail'
                    className={styles.inputContent}
                    placeholder='fake@email...'
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })} />

                <label htmlFor="pwd" className={styles.titlePwd}>Password :</label>
                <section className={styles.paswordContentSingIn}>
                    <input type={showPassword ? "text" : "password"}
                        id='pwd' value={formData.password}
                        className={styles.inputContent}
                        placeholder='password...'
                        onChange={(e) => setFormData({ ...formData, password: e.target.value })} />

                    <Image variant="icon"
                        title={showPassword ? "Hide password" : "Show password"}
                        src={showPassword ? HidePassword : ShowPassword}
                        onClick={() => setShowPassword(prevState => !prevState)} />
                </section>

                <section className={styles.bottonForm}>
                    <div className={styles.loginSingIn}>
                        <Button variant="loginBtn" disabled={isLoading}>
                            <Image src={LogInImg} variant="icon" />
                            {isLoading ? "Authenticating....." : "Log in"}
                            {/* Log in */}
                        </Button>
                    </div>
                    <span className={styles.dividerText}>Or:</span>
                    <Navigation to="/registration" >
                        <Button variant="createAcc" className={styles.bottonForm}>
                            <Image src={CreateAccount} variant="icon" />
                            Create a New Accoutn
                        </Button>
                    </Navigation>
                </section>
            </form>
        </aside>
    )
}

export default SignInLeftAside  