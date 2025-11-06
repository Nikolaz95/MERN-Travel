import React, { useEffect, useState } from 'react'
import titleName from '../../../hooks/useTitle';
import toast from 'react-hot-toast';


//import css
import styles from './Register.module.css';

//import  icon
import { CreateAccount, HidePassword, LogInImg, ShowPassword } from '../../../../assets/Icons';


//import components
import MainLayout from '../../../layouts/ContentLayout/MainLayout/MainLayout';
import FormLayout from '../../../layouts/ContentLayout/FormLayout/FormLayout';
import Button from '../../../layouts/Buttons/Button';
import { NavLink, useNavigate } from 'react-router';
import Image from '../../../layouts/Images/Image';
import Navigation from '../../../layouts/NavigatioLinkComponent/Navigation';
import { useRegisterMutation } from '../../../../redux/api/authApi';

const Register = () => {
    titleName('Register');
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);

    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
    });

    const { name, email, password } = user;


    const [register, { isLoading, error, data }] = useRegisterMutation();

    console.log("========================");
    console.log(data);
    console.log("========================");


    useEffect(() => {
        /* if (isAuthenticated) {
            navigate("/user/settings-Profile");
            // Use user.name from Redux state if available
            const userName = user?.name || "User";
            toast.success(`Welcome back, ${userName}!`);
        } */
        if (error) {
            toast.error(error?.data?.message)
        }
    }, [error, toast])


    const submitHandler = (e) => {
        e.preventDefault();

        const singUpData = {
            name,
            email,
            password,
        };

        register(singUpData);
    };

    const onChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    }


    return (
        <>
            <MainLayout>
                <FormLayout>
                    <h1 className={styles.titleReg}>Create Accunt</h1>
                    <form className={styles.regFormContent} onSubmit={submitHandler}>
                        <label htmlFor="name" className={styles.labelTitle}>Your Username:</label>
                        <input type="text" name="name"
                            id='name'
                            className={styles.inputContent}
                            value={name} onChange={onChange}
                            placeholder='username...' />

                        <label htmlFor="mail" className={styles.labelTitle}> Your Emai:</label>
                        <input type="email" name="email"
                            id='mail'
                            className={styles.inputContent}
                            placeholder='fake@email.com'
                            value={email} onChange={onChange} />

                        <label htmlFor="pwd" className={styles.labelTitle}>Password :</label>
                        <section className={styles.paswordContentRegister}>
                            <input type={showPassword ? "text" : "password"}
                                name="password" id='pwd' className={styles.inputContent}
                                placeholder='password...' value={password} onChange={onChange} />
                            <Image title={showPassword ? "Hide password" : "Show password"}
                                src={showPassword ? HidePassword : ShowPassword} variant="icon" className='imgHideShow'
                                onClick={() => setShowPassword(prevState => !prevState)} />
                        </section>
                        <section className={styles.bottonFormRegister}>
                            <Button variant="createAcc" disabled={isLoading}>
                                {/* <p>Create a New Accoutn</p> */}
                                {isLoading ? "Creating ..." : "Create a New Accoutn"}
                                <Image src={CreateAccount} variant="icon" />
                            </Button>
                            <span className={styles.dividerText} >Or:</span>
                            <section className={styles.btnLoginSingIn}>
                                <p className={styles.alrText}>You already have account ?</p>
                                <Navigation to="/signIn">
                                    <Button variant="loginBtn">
                                        <Image src={LogInImg} variant="icon" />
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