import React, { useEffect, useState } from 'react'
import titleName from '../../../hooks/useTitle';
import toast from 'react-hot-toast';


//import css
import styles from '../../../layouts/ContentLayout/FormLayout/AuthForm.module.css';


//import components
import FormLayout from '../../../layouts/ContentLayout/FormLayout/FormLayout';
import PasswordInput from '../../../layouts/ContentLayout/FormLayout/PasswordInput';
import SignInRightAside from '../SingIn/Layout/SignInRightAside';
import Button from '../../../layouts/Buttons/Button';
import { useNavigate } from 'react-router';
import Navigation from '../../../layouts/NavigatioLinkComponent/Navigation';
import { useRegisterMutation } from '../../../../redux/api/authApi';
import { useSelector } from 'react-redux';

const Register = () => {
    titleName('Register');
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
    });

    const { name, email, password } = formData;
    const { isAuthenticated, user } = useSelector((state) => state.auth)
    const userName = user?.name || "traveler";


    const [register, { isLoading }] = useRegisterMutation();


    useEffect(() => {
        if (isAuthenticated) {
            navigate("/user/settings-Profile");
            toast.success(`Welcome, ${userName}!`);
        }
    }, [isAuthenticated, navigate, userName])


    const submitHandler = async (e) => {
        e.preventDefault();

        try {
            await register({ name, email, password }).unwrap();
        } catch (err) {
            toast.error(err?.data?.message || "Registration failed");
        }
    };


    const onChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }


    return (
        <FormLayout aside={<SignInRightAside title="Start your travel diary" />}>
            <h1 className={styles.title}>Create account</h1>
            <p className={styles.subtitle}>It's free and takes less than a minute.</p>

            <form className={styles.form} onSubmit={submitHandler}>
                <div className={styles.field}>
                    <label htmlFor="name" className={styles.label}>Username</label>
                    <input type="text" id="name" name="name"
                        className={styles.input}
                        placeholder="Your name"
                        autoComplete="name" required maxLength={50}
                        value={name} onChange={onChange} />
                </div>

                <div className={styles.field}>
                    <label htmlFor="email" className={styles.label}>Email</label>
                    <input type="email" id="email" name="email"
                        className={styles.input}
                        placeholder="you@example.com"
                        autoComplete="email" required
                        value={email} onChange={onChange} />
                </div>

                <div className={styles.field}>
                    <label htmlFor="password" className={styles.label}>Password</label>
                    <PasswordInput id="password" name="password"
                        placeholder="Create a password"
                        autoComplete="new-password" required minLength={6}
                        aria-describedby="password-hint"
                        value={password} onChange={onChange} />
                    <p id="password-hint" className={styles.hint}>At least 6 characters.</p>
                </div>

                <div className={styles.submit}>
                    <Button type="submit" variant="primary" disabled={isLoading}>
                        {isLoading ? "Creating account..." : "Create account"}
                    </Button>
                </div>
            </form>

            <p className={styles.switchText}>
                Already have an account? <Navigation to="/signIn" variant="authLink">Sign in</Navigation>
            </p>
        </FormLayout>
    )
}

export default Register
