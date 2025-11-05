import React, { useEffect, useState } from 'react'
import titleName from '../../../hooks/useTitle';
import toast from 'react-hot-toast';



//import css
import styles from './SignIn.module.css';

//import components
import MainLayout from '../../../layouts/ContentLayout/MainLayout/MainLayout';
import FormLayout from '../../../layouts/ContentLayout/FormLayout/FormLayout';
import SignInLeftAside from './Layout/SignInLeftAside';
import SignInRightAside from './Layout/SignInRightAside';
import { useLoginMutation } from '../../../../redux/api/authApi';
import { useNavigate } from 'react-router';
import { useSelector } from 'react-redux';

const SignIn = () => {
    titleName('Sign In');
    const navigate = useNavigate();

    /* const [email, setEmail] = useState("");
    const [password, setPassword] = useState(""); */

    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });


    const [login, { isLoading, error, data }] = useLoginMutation();
    const { isAuthenticated, user } = useSelector((state) => state.auth)


    console.log("========================");
    console.log(data);
    console.log("========================");


    useEffect(() => {
        if (isAuthenticated) {
            navigate("/user/settings-Profile");
            // Use user.name from Redux state if available
            const userName = user?.name || "User";
            toast.success(`Welcome back, ${userName}!`);
        }
        if (error) {
            toast.error(error?.data?.message)
        }
    }, [error, isAuthenticated, setTimeout, name, toast])

    const submitHandler = (e) => {
        e.preventDefault();

        /* const loginData = {
            email,
            password,
        }; */

        const loginData = {
            email: formData.email,
            password: formData.password,
        };

        login(loginData);
    }


    return (
        <>
            <MainLayout>
                <FormLayout>
                    <h1 className={styles.titleSingIn}>Sign in</h1>
                    <section className={styles.formSection}>
                        <SignInLeftAside
                            submitHandler={submitHandler}
                            setFormData={setFormData}
                            formData={formData}
                            isLoading={isLoading}
                        />
                        <SignInRightAside />
                    </section>
                </FormLayout>
            </MainLayout>
        </>
    )
}

export default SignIn