import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import Button from '../../../../Buttons/Button';
import { useGetUserDetailsQuery, useUpdateUserMutation } from '../../../../../../redux/api/userApi';

//import css
import "../ModalCard.css";
import styles from '../../../../ContentLayout/FormLayout/AuthForm.module.css';


const UpdateProfileModal = ({ userId, onClose }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [role, setRole] = useState("user");

    const { data, isLoading: isLoadingUser } = useGetUserDetailsQuery(userId);
    const [updateUser, { isLoading }] = useUpdateUserMutation();

    useEffect(() => {
        if (data?.user) {
            setName(data?.user?.name);
            setEmail(data?.user?.email);
            setRole(data?.user?.role);
        }
    }, [data]);


    const submitHandler = async (e) => {
        e.preventDefault();

        try {
            await updateUser({ id: userId, body: { name, email, role } }).unwrap();
            toast.success("User updated");
            onClose();
        } catch (err) {
            toast.error(err?.data?.message || "Update failed");
        }
    };

    return (
        <form className="modalCard" onSubmit={submitHandler} aria-labelledby="edit-user-title">
            <h2 id="edit-user-title" className="modalCardTitle">Edit user</h2>

            <div className={styles.field}>
                <label htmlFor="edit_name" className={styles.label}>Name</label>
                <input type="text" id="edit_name" name="name" className={styles.input}
                    required maxLength={50} disabled={isLoadingUser}
                    value={name} onChange={(e) => setName(e.target.value)} />
            </div>

            <div className={styles.field}>
                <label htmlFor="edit_email" className={styles.label}>Email</label>
                <input type="email" id="edit_email" name="email" className={styles.input}
                    required disabled={isLoadingUser}
                    value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>

            <div className={styles.field}>
                <label htmlFor="edit_role" className={styles.label}>Role</label>
                <select id="edit_role" name="role" className={styles.input}
                    disabled={isLoadingUser}
                    value={role} onChange={(e) => setRole(e.target.value)}>
                    <option value="user">User</option>
                    <option value="admin">Admin</option>
                </select>
            </div>

            <div className="modalCardActions">
                <Button type="button" variant="secondary" onClick={onClose} disabled={isLoading}>
                    Cancel
                </Button>
                <Button type="submit" variant="primary" disabled={isLoading || isLoadingUser}>
                    {isLoading ? "Saving..." : "Save"}
                </Button>
            </div>
        </form>
    )
}

export default UpdateProfileModal
