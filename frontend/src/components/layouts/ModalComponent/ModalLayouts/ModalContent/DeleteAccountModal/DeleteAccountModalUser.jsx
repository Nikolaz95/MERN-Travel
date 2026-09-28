import React from 'react'
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router';
import Button from '../../../../Buttons/Button';
import { useDeleteMyAccountMutation } from '../../../../../../redux/api/userApi';

//import css
import "../ModalCard.css";

const DeleteAccountModalUser = ({ onClose, userId }) => {
    const navigate = useNavigate();
    const [deleteMyAccount, { isLoading }] = useDeleteMyAccountMutation();

    const handleDelete = async () => {
        try {
            // Call the backend API to delete the account
            await deleteMyAccount(userId).unwrap();
            // Remove token from localStorage or sessionStorage
            localStorage.removeItem('token');
            // Show success message
            toast.success('Account has been deleted successfully');
            // Redirect to home page or login page
            navigate('/', { replace: true });
            window.location.reload(); // Optionally force a page reload to clear session data
        } catch (error) {
            toast.error(error?.data?.message || 'Failed to delete your account');
        }
    };

    return (
        <div className="modalCard" role="alertdialog" aria-labelledby="delete-own-title">
            <span className="modalCardIcon" aria-hidden="true">⚠️</span>
            <h2 id="delete-own-title" className="modalCardTitle">Delete your account?</h2>
            <p className="modalCardText">
                You will be logged out and your account will be removed. This action cannot be undone.
            </p>
            <div className="modalCardActions">
                <Button type="button" variant="secondary" onClick={onClose} disabled={isLoading}>
                    Cancel
                </Button>
                <Button type="button" variant="danger" onClick={handleDelete} disabled={isLoading}>
                    {isLoading ? "Deleting..." : "Delete account"}
                </Button>
            </div>
        </div>
    )
}

export default DeleteAccountModalUser
