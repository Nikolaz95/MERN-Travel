import React, { useState } from 'react'
import titleName from '../../../../hooks/useTitle';

//import css
import "./DeleteAccount.css"

//import img
import { AvatarDefault, DeleteBtn } from '../../../../../assets/Icons';

//import components
import DashBoardLayout from '../../AdminPage/DashBoardSection/DashboardLayout/DashBoardLayout';
import UserInfoLayout from '../Layouts/UserInfoLayout';
import Button from '../../../../layouts/Buttons/Button';
import Image from '../../../../layouts/Images/Image';
import { useSelector } from 'react-redux';
import Modal from '../../../../layouts/ModalComponent/Modal';
import DeleteAccountModalUser from '../../../../layouts/ModalComponent/ModalLayouts/ModalContent/DeleteAccountModal/DeleteAccountModalUser';

const DeleteAccount = () => {
    titleName(`Delete Account`);
    const { user } = useSelector((state) => state.auth);
    const [selectedUserId, setSelectedUserId] = useState(null);

    // State to track which modal is open
    const [activeModal, setActiveModal] = useState("");

    // Function to close the modal
    const closeModal = () => setActiveModal("");

    const handleDeleteClick = (userId) => {
        setSelectedUserId(userId);
        setActiveModal("deleteAccountUser");
    };

    return (
        <DashBoardLayout>
            <h1>Delete Account</h1>
            <UserInfoLayout>
                <section className='deleteAccountContent'>
                    <div className="deleteAccountContainer">
                        <div className="deleteAccountTop">
                            <Image variant='profile' src={
                                user?.avatar ? user?.avatar?.url : AvatarDefault
                            }
                                alt="" title="Your Profil picture"
                                className='deleteAccountImg' />
                        </div>
                        <div className="deleteAccountBottom">
                            <div className="deleteAccountName">
                                <h1>Full Name:</h1>
                                <p>{user.name}</p>
                            </div>
                            <div className="deleteAccountEmail">
                                <h1>Email:</h1>
                                <p>{user.email}</p>
                            </div>
                            <div className="deleteAccountBtnDelete">
                                <Button onClick={() => setActiveModal("deleteAccountUser")}
                                    variant="deleteAccount" icon={DeleteBtn}
                                    title="Delete Account">
                                    <p>Delete Account</p>
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>
            </UserInfoLayout>

            {/* Modal for delete modal */}
            <Modal isOpen={activeModal === "deleteAccountUser"} onClose={closeModal}>
                <DeleteAccountModalUser onClose={closeModal} userId={selectedUserId} />
            </Modal>
        </DashBoardLayout>
    )
}

export default DeleteAccount