import React, { useEffect, useState } from 'react'
import titleName from '../../../../hooks/useTitle';
import { toast } from 'react-hot-toast';

//import css
import "./UpdateProfile.css"

//import images


//import components
import DashBoardLayout from '../../AdminPage/DashBoardSection/DashboardLayout/DashBoardLayout'
import UserInfoLayout from '../Layouts/UserInfoLayout'
import Button from '../../../../layouts/Buttons/Button';
import Image from '../../../../layouts/Images/Image';
import { SaveUpdate } from '../../../../../assets/Icons';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { useUpdateProfileMutation } from '../../../../../redux/api/userApi';



const UpdateProfile = () => {
    titleName(`Update Profile`);
    const navigate = useNavigate();
    const [updateProfile, { isLoading, error, isSuccess }] = useUpdateProfileMutation();
    const { user } = useSelector((state) => state.auth);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    useEffect(() => {
        if (user) {
            setName(user?.name);
            setEmail(user?.email);
        }
        if (isSuccess) {
            toast.success("User Updated")
            navigate("/user/settings-Profile");
        }

        if (error) {
            toast.error(error?.data?.message);
        }
    }, [user, error, isSuccess]);


    const submitHandler = (e) => {
        e.preventDefault();

        const userData = {
            name,
            email,
        };

        updateProfile(userData);
    };
    return (

        <DashBoardLayout>
            <h1>Update Profile</h1>
            <UserInfoLayout>
                <main className='formMain'>
                    <h1>Update Your Profile:</h1>
                    <form className="formContentUpdateProfile" onSubmit={submitHandler} >
                        <label htmlFor="name_field" className="formLabel">
                            Name:
                        </label>
                        <input type="text" id="name_field"
                            className="form-control" placeholder='fakeUserName'
                            value={name}
                            onChange={(e) => setName(e.target.value)} name="name" />
                        <label htmlFor="email_field" className="form-label">
                            Email:
                        </label>
                        <input type="email" placeholder='fake@email.com'
                            value={email} onChange={(e) => setEmail(e.target.value)}
                            id="email_field" className="form-control"
                            name="email" />
                        <div className="btn-updateProfileSeting">
                            <Button
                                variant="updateProfile" disabled={isLoading} >
                                <Image variant="icon" src={SaveUpdate} className="iconBtns" />
                                {isLoading ? "Updating..." : "Save Update"}
                            </Button>
                        </div>
                    </form>
                </main>
            </UserInfoLayout>
        </DashBoardLayout>
    )
}

export default UpdateProfile