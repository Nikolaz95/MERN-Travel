import React, { useState } from 'react'
import titleName from '../../../../hooks/useTitle';
import { toast } from 'react-hot-toast';

//import css
import styles from '../../../../layouts/ContentLayout/FormLayout/AuthForm.module.css';


//import components
import DashBoardLayout from '../../AdminPage/DashBoardSection/DashboardLayout/DashBoardLayout'
import Button from '../../../../layouts/Buttons/Button';
import Navigation from '../../../../layouts/NavigatioLinkComponent/Navigation';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { useUpdateProfileMutation } from '../../../../../redux/api/userApi';



const UpdateProfile = () => {
    titleName(`Update Profile`);
    const navigate = useNavigate();
    const [updateProfile, { isLoading }] = useUpdateProfileMutation();
    const { user } = useSelector((state) => state.auth);

    const [name, setName] = useState(user?.name || "");
    const [email, setEmail] = useState(user?.email || "");


    const submitHandler = async (e) => {
        e.preventDefault();

        try {
            await updateProfile({ name, email }).unwrap();
            toast.success("Profile updated");
            navigate("/user/settings-Profile");
        } catch (err) {
            toast.error(err?.data?.message || "Update failed");
        }
    };

    return (
        <DashBoardLayout title="Update profile" subtitle="Change your name and email address.">
            <form className="dashCard dashNarrow dashForm" onSubmit={submitHandler}>
                <div className={styles.field}>
                    <label htmlFor="name_field" className={styles.label}>Name</label>
                    <input type="text" id="name_field" name="name"
                        className={styles.input}
                        autoComplete="name" required maxLength={50}
                        value={name} onChange={(e) => setName(e.target.value)} />
                </div>

                <div className={styles.field}>
                    <label htmlFor="email_field" className={styles.label}>Email</label>
                    <input type="email" id="email_field" name="email"
                        className={styles.input}
                        autoComplete="email" required
                        value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>

                <div className="dashActions">
                    <Button type="submit" variant="primary" disabled={isLoading}>
                        {isLoading ? "Saving..." : "Save changes"}
                    </Button>
                    <Navigation to="/user/settings-Profile" variant="dashLinkButton">Cancel</Navigation>
                </div>
            </form>
        </DashBoardLayout>
    )
}

export default UpdateProfile
