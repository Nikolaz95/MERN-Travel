import React, { useState } from 'react'
import titleName from '../../../hooks/useTitle';


//import css
import styles from './Register.module.css';

//import  icon
import Show from "../../../../assets/icons/icon-show.png"
import Hide from "../../../../assets/icons/icon-hide.png"
import LogIn from "../../../../assets/icons/icon-login.png"
import CreateAccount from "../../../../assets/icons/icon-addAccount.png"

//import components
import MainLayout from '../../../layouts/ContentLayout/MainLayout/MainLayout';
import FormLayout from '../../../layouts/ContentLayout/FormLayout/FormLayout';
import Button from '../../../layouts/Buttons/Button';
import { NavLink } from 'react-router';
import Image from '../../../layouts/Images/Image';
import Navigation from '../../../layouts/NavigatioLinkComponent/Navigation';

const Register = () => {
    titleName('Register');
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    return (
        <>
            <MainLayout>
                <FormLayout>
                    <h1 className={styles.titleReg}>Create Accunt</h1>
                    <form className={styles.regFormContent}>
                        <label htmlFor="name" className={styles.labelTitle}>Your Username:</label>
                        <input type="text" name="name" id='name' className={styles.inputContent} placeholder='username...' />
                        <label htmlFor="mail" className={styles.labelTitle}> Your Emai:</label>
                        <input type="email" name="email" id='mail' className={styles.inputContent} placeholder='fake@email.com' />

                        <label htmlFor="pwd" className={styles.labelTitle}>Password :</label>
                        <section className={styles.paswordContentRegister}>
                            <input type={showPassword ? "text" : "password"}
                                name="password" id='pwd' className={styles.inputContent}
                                placeholder='password...' />
                            <Image title={showPassword ? "Hide password" : "Show password"}
                                src={showPassword ? Hide : Show} className='imgHideShow'
                                onClick={() => setShowPassword(prevState => !prevState)} />
                        </section>
                        <section className={styles.bottonFormRegister}>
                            <Button variant="createAcc">
                                Create a New Accoutn
                                <Image src={CreateAccount} variant="icon" />
                            </Button>
                            <span className={styles.dividerText} >Or:</span>
                            <section className={styles.btnLoginSingIn}>
                                <p className={styles.alrText}>You already have account ?</p>
                                <Navigation to="/signIn">
                                    <Button variant="loginBtn">
                                        <Image src={LogIn} variant="icon" />
                                        Sing In
                                    </Button>
                                </Navigation>
                            </section>
                        </section>
                    </form>
                </FormLayout>
            </MainLayout>
        </>
    )
}

export default Register