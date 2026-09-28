import React, { useEffect, useState } from 'react'
import titleName from '../../../hooks/useTitle';
import toast from 'react-hot-toast';


//import components
import FormLayout from '../../../layouts/ContentLayout/FormLayout/FormLayout';
import SignInLeftAside from './Layout/SignInLeftAside';
import SignInRightAside from './Layout/SignInRightAside';
import { useLoginMutation } from '../../../../redux/api/authApi';
import { useNavigate } from 'react-router';
import { useSelector } from 'react-redux';

const SignIn = () => {
    titleName('Sign In');
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });


    const [login, { isLoading }] = useLoginMutation();
    const { isAuthenticated, user } = useSelector((state) => state.auth)
    const userName = user?.name || "traveler";


    useEffect(() => {
        if (isAuthenticated) {
            navigate("/user/settings-Profile");
            toast.success(`Welcome back, ${userName}!`);
        }
    }, [isAuthenticated, navigate, userName])

    const submitHandler = async (e) => {
        e.preventDefault();

        try {
            await login(formData).unwrap();
        } catch (err) {
            toast.error(err?.data?.message || "Login failed");
        }
    }


    return (
        <FormLayout aside={<SignInRightAside title="Welcome back, traveler" />}>
            <SignInLeftAside
                submitHandler={submitHandler}
                setFormData={setFormData}
                formData={formData}
                isLoading={isLoading}
            />
        </FormLayout>
    )
}

export default SignIn
