import React from 'react'
import style from "styled-components"
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router';
import Button from '../../../../Buttons/Button';
import Image from '../../../../Images/Image';
import { Cancel, Confirm } from '../../../../../../assets/Icons';
import { useDeleteMyAccountMutation } from '../../../../../../redux/api/userApi';

const DeleteAccountModalLayout = style.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    padding: 20px;
    background-color: bisque;
    border-radius: 30px;
`
const DeleteAccountModalContent = style.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 20px;
    padding: 20px;
    background-color: bisque;
    border-radius: 30px;
`

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
        <DeleteAccountModalLayout>
            <h1>Do you realy wanna delete account ?</h1>
            <p>Are you sure you want to delete this user account?</p>
            <p>This action cannot be undone.</p>
            <DeleteAccountModalContent>
                <Button onClick={handleDelete}
                    disabled={isLoading}>
                    <Image src={Confirm} variant='iconImg' />
                </Button>
                <Button>
                    <Image src={Cancel} variant='iconImg' onClick={onClose} /></Button>
            </DeleteAccountModalContent>
        </DeleteAccountModalLayout>
    )
}

export default DeleteAccountModalUser