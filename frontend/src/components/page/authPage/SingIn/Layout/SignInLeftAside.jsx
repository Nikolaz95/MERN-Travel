import React from 'react'


//import css
import styles from '../../../../layouts/ContentLayout/FormLayout/AuthForm.module.css';


//import components
import Button from '../../../../layouts/Buttons/Button'
import Navigation from '../../../../layouts/NavigatioLinkComponent/Navigation';
import PasswordInput from '../../../../layouts/ContentLayout/FormLayout/PasswordInput';

const SignInLeftAside = ({ submitHandler, setFormData, formData, isLoading }) => {
    const onChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <>
            <h1 className={styles.title}>Sign in</h1>
            <p className={styles.subtitle}>Welcome back! Log in to continue your travel diary.</p>

            <form className={styles.form} onSubmit={submitHandler}>
                <div className={styles.field}>
                    <label htmlFor="email" className={styles.label}>Email</label>
                    <input type="email" id="email" name="email"
                        className={styles.input}
                        placeholder="you@example.com"
                        autoComplete="email" required
                        value={formData.email} onChange={onChange} />
                </div>

                <div className={styles.field}>
                    <label htmlFor="password" className={styles.label}>Password</label>
                    <PasswordInput id="password" name="password"
                        placeholder="Your password"
                        autoComplete="current-password" required
                        value={formData.password} onChange={onChange} />
                </div>

                <div className={styles.submit}>
                    <Button type="submit" variant="primary" disabled={isLoading}>
                        {isLoading ? "Signing in..." : "Sign in"}
                    </Button>
                </div>
            </form>

            <p className={styles.switchText}>
                Don't have an account? <Navigation to="/registration" variant="authLink">Create one</Navigation>
            </p>
        </>
    )
}

export default SignInLeftAside
