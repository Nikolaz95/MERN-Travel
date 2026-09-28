import React, { useState } from 'react'
import titleName from '../../../../hooks/useTitle';
import toast from 'react-hot-toast';


//import css
import "./UploadPicture.css"

//import images
import { AvatarDefault } from '../../../../../assets/Icons';


import DashBoardLayout from '../../AdminPage/DashBoardSection/DashboardLayout/DashBoardLayout';
import Button from '../../../../layouts/Buttons/Button';
import Image from '../../../../layouts/Images/Image';
import Navigation from '../../../../layouts/NavigatioLinkComponent/Navigation';
import { useUploadAvatarMutation } from '../../../../../redux/api/userApi';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';

// the backend accepts JSON bodies up to 10 MB and base64 adds ~35%
const MAX_FILE_SIZE = 5 * 1024 * 1024;

const UploadPicture = () => {
    titleName(`Upload Picture`);

    const navigate = useNavigate();

    const [uploadAvatar, { isLoading }] = useUploadAvatarMutation();

    const { user } = useSelector((state) => state.auth);

    const [avatar, setAvatar] = useState("");

    const [avatarPreview, setAvatarPreview] = useState(
        user?.avatar?.url || AvatarDefault
    );

    const submitHandler = async (e) => {
        e.preventDefault();

        try {
            await uploadAvatar({ avatar }).unwrap();
            toast.success("Picture updated");
            navigate("/user/settings-Profile");
        } catch (err) {
            toast.error(err?.data?.message || "Upload failed");
        }
    };

    const onChange = (e) => {
        const file = e.target.files?.[0];
        if (!file) return;

        if (file.size > MAX_FILE_SIZE) {
            toast.error("Picture is too large (max 5 MB)");
            e.target.value = "";
            return;
        }

        const reader = new FileReader();
        reader.onload = () => {
            if (reader.readyState === 2) {
                setAvatarPreview(reader.result);
                setAvatar(reader.result);
            }
        };
        reader.readAsDataURL(file);
    };


    return (
        <DashBoardLayout title="Profile picture" subtitle="Choose a photo that shows who you are.">
            <form className="dashCard dashNarrow uploadCard" onSubmit={submitHandler}>
                <Image src={avatarPreview} alt="Profile picture preview" variant="uploadAvatar" />

                <div className="uploadChoose">
                    <input type="file" id="avatarFile" name="avatar"
                        className="uploadInput" accept="image/*"
                        onChange={onChange} />
                    <label htmlFor="avatarFile" className="uploadChooseLabel">📷 Choose picture</label>
                    <p className="uploadHint">JPG, PNG or WEBP, max 5 MB.</p>
                </div>

                <div className="dashActions">
                    <Button type="submit" variant="primary" disabled={!avatar || isLoading}>
                        {isLoading ? "Uploading..." : "Save picture"}
                    </Button>
                    <Navigation to="/user/settings-Profile" variant="dashLinkButton">Cancel</Navigation>
                </div>
            </form>
        </DashBoardLayout>
    )
}

export default UploadPicture
