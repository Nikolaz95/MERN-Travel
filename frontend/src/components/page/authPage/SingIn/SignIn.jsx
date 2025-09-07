import React, { useState } from 'react'
import titleName from '../../../hooks/useTitle';



//import css
import styles from './SignIn.module.css';

//import components
import MainLayout from '../../../layouts/ContentLayout/MainLayout/MainLayout';
import FormLayout from '../../../layouts/ContentLayout/FormLayout/FormLayout';
import SignInLeftAside from './Layout/SignInLeftAside';
import SignInRightAside from './Layout/SignInRightAside';

const SignIn = () => {
    titleName('Sign In');

    return (
        <>
            <MainLayout>
                <FormLayout>
                    <h1 className={styles.titleSingIn}>Sign in</h1>
                    <section className={styles.formSection}>
                        <SignInLeftAside />
                        <SignInRightAside />
                    </section>
                </FormLayout>
            </MainLayout>
        </>
    )
}

export default SignIn