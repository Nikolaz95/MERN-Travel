import React, { useState } from 'react'
import titleName from '../../../../hooks/useTitle';
import toast from 'react-hot-toast';

//import css
import styles from '../../../../layouts/ContentLayout/FormLayout/AuthForm.module.css';


import DashBoardLayout from '../../AdminPage/DashBoardSection/DashboardLayout/DashBoardLayout';
import Button from '../../../../layouts/Buttons/Button';
import Navigation from '../../../../layouts/NavigatioLinkComponent/Navigation';
import PasswordInput from '../../../../layouts/ContentLayout/FormLayout/PasswordInput';
import { useNavigate } from 'react-router';
import { useUpdatePasswordMutation } from '../../../../../redux/api/userApi';


const UpdatePassword = () => {
    titleName(`Update Password`);
    const navigate = useNavigate();

    const [oldPassword, setOldPassword] = useState("");
    const [password, setPassword] = useState("");

    const [updatePassword, { isLoading }] = useUpdatePasswordMutation();

    const submitHandler = async (e) => {
        e.preventDefault();

        try {
            await updatePassword({ oldPassword, password }).unwrap();
            toast.success("Password updated");
            navigate("/user/settings-Profile");
        } catch (err) {
            toast.error(err?.data?.message || "Update failed");
        }
    };


    return (
        <DashBoardLayout title="Update password" subtitle="Use a password you don't use anywhere else.">
            <form className="dashCard dashNarrow dashForm" onSubmit={submitHandler}>
                <div className={styles.field}>
                    <label htmlFor="old_password" className={styles.label}>Current password</label>
                    <PasswordInput id="old_password" name="oldPassword"
                        autoComplete="current-password" required
                        value={oldPassword} onChange={(e) => setOldPassword(e.target.value)} />
                </div>

                <div className={styles.field}>
                    <label htmlFor="new_password" className={styles.label}>New password</label>
                    <PasswordInput id="new_password" name="password"
                        autoComplete="new-password" required minLength={6}
                        aria-describedby="new-password-hint"
                        value={password} onChange={(e) => setPassword(e.target.value)} />
                    <p id="new-password-hint" className={styles.hint}>At least 6 characters.</p>
                </div>

                <div className="dashActions">
                    <Button type="submit" variant="primary" disabled={isLoading}>
                        {isLoading ? "Updating..." : "Update password"}
                    </Button>
                    <Navigation to="/user/settings-Profile" variant="dashLinkButton">Cancel</Navigation>
                </div>
            </form>
        </DashBoardLayout>
    )
}

export default UpdatePassword
