import React from 'react'
import titleName from '../../../../hooks/useTitle';
import toast from 'react-hot-toast';


//import css
import "./UploadPicture.css"

//import images
import { AvatarDefault, CancelUpdate, SaveUpdate, UploadCamera } from '../../../../../assets/Icons';


import DashBoardLayout from '../../AdminPage/DashBoardSection/DashboardLayout/DashBoardLayout';
import UserInfoLayout from '../Layouts/UserInfoLayout';
import Button from '../../../../layouts/Buttons/Button';
import Image from '../../../../layouts/Images/Image';
import { useUploadAvatarMutation } from '../../../../../redux/api/userApi';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import { useEffect } from 'react';

const UploadPicture = () => {
    titleName(`Upload Picture`);

    const navigate = useNavigate();

    const [uploadAvatar, { isLoading, error, isSuccess }] = useUploadAvatarMutation();

    const { user } = useSelector((state) => state.auth);

    const [avatar, setAvatar] = useState("");

    const [avatarPreview, setAvatarPreview] = useState(
        user?.avatar ? user?.avatar?.url : AvatarDefault
    );

    useEffect(() => {
        if (error) {
            toast.error(error?.data?.message);
        }

        if (isSuccess) {
            toast.success("Avatar Uploaded");
            navigate("/user/settings-Profile");
        }
    }, [error, isSuccess]);

    const submitHandler = (e) => {
        e.preventDefault();

        const userData = {
            avatar,
        };
        console.log("========================");
        console.log(userData);
        console.log("========================");


        uploadAvatar(userData);
    };

    const onChange = (e) => {
        const reader = new FileReader();
        reader.onload = () => {
            if (reader.readyState === 2) {
                setAvatarPreview(reader.result);
                setAvatar(reader.result);
            }
        };
        reader.readAsDataURL(e.target.files[0]);
    };


    return (
        <DashBoardLayout>
            <h1>Upload Picture</h1>
            <UserInfoLayout>
                <section className='userUploadContent'>
                    <form action="" className="userUpload-info" onSubmit={submitHandler}>
                        <div className="userUpload-top">
                            <Image variant="icon" src={avatarPreview} alt="avatar Default" className='userUpload-Profileimg' />
                            <input type="file" name='file'
                                id='file'
                                accept="images/*"
                                onChange={onChange} />
                            <label htmlFor="file" className='userUpload-BtnUplFile'>
                                <Image src={UploadCamera} variant="icon" title='Change picture' alt="chose a picture" className='userUpload-camera' />
                            </label>
                        </div>
                        <div className="userUpload-Btns">
                            <Button >
                                <Image variant="icon" src={SaveUpdate} className="iconBtns" disabled={isLoading} />
                                {/* Save Upload */}
                                {isLoading ? "Uploading..." : "Save Upload"}
                            </Button>
                            <Button >
                                <Image variant="icon" src={CancelUpdate} className="iconBtns" />
                                Cancel
                            </Button>
                        </div>
                    </form>
                </section>

            </UserInfoLayout>

        </DashBoardLayout>
    )
}

export default UploadPicture