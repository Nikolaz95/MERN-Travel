import React from 'react'
import toast from 'react-hot-toast';
import Button from '../../../../Buttons/Button';
import { useDeleteUserMutation } from '../../../../../../redux/api/userApi';

//import css
import "../ModalCard.css";

const DeleteAccountModalAdmin = ({ onClose, userId, userName }) => {
    const [deleteAccount, { isLoading }] = useDeleteUserMutation();

    const handleDelete = async () => {
        try {
            // the users list refreshes by itself (RTK Query tag)
            await deleteAccount(userId).unwrap();
            toast.success('Account has been deleted successfully');
            onClose();
        } catch (error) {
            toast.error(error?.data?.message || 'Failed to delete this account');
        }
    };

    return (
        <div className="modalCard" role="alertdialog" aria-labelledby="delete-user-title">
            <span className="modalCardIcon" aria-hidden="true">⚠️</span>
            <h2 id="delete-user-title" className="modalCardTitle">Delete this account?</h2>
            <p className="modalCardText">
                {userName ? <><strong>{userName}</strong>'s account</> : "This account"} will be removed permanently.
                This action cannot be undone.
            </p>
            <div className="modalCardActions">
                <Button type="button" variant="secondary" onClick={onClose} disabled={isLoading}>
                    Cancel
                </Button>
                <Button type="button" variant="danger" onClick={handleDelete} disabled={isLoading}>
                    {isLoading ? "Deleting..." : "Delete"}
                </Button>
            </div>
        </div>
    )
}

export default DeleteAccountModalAdmin
