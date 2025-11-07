import React, { useState } from 'react'

//import css
import "./TableList.css"

//import images
import { DeleteAccoutn, SaveUpdate } from '../../../../../../assets/Icons'
import Modal from '../../../../../layouts/ModalComponent/Modal';
import UpdateProfileModal from '../../../../../layouts/ModalComponent/ModalLayouts/ModalContent/UpdateProfileModal.jsx/UpdateProfileModal';

import DeleteAccountModalAdmin from '../../../../../layouts/ModalComponent/ModalLayouts/ModalContent/DeleteAccountModal/DeleteAccountModalAdmin';

const TableList = ({ currentUsers }) => {
    // State to track which modal is open
    const [activeModal, setActiveModal] = useState("");
    const [selectedUserId, setSelectedUserId] = useState(null);
    // Function to close the modal
    const closeModal = () => setActiveModal("");

    const handleUpdateClick = (userId) => {
        setSelectedUserId(userId);
        setActiveModal("updateAccount");
    };

    const handleDeleteClick = (userId) => {
        setSelectedUserId(userId);
        setActiveModal("deleteAccountAdmin");
    };
    return (
        <section className='tableSection'>
            <table>
                <thead>
                    <tr>
                        <th>#ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Created</th>
                        <th>Role</th>
                        <th>Actions</th>
                    </tr>
                </thead>

                <tbody>
                    {currentUsers.map((user) => (
                        <tr key={user._id}>
                            <td># {user._id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.createdAt?.substring(0, 10)}</td>
                            <td>{user.role}</td>
                            <td>
                                <div className='btn-userListContent'>
                                    <button className='btn-userList'
                                        onClick={() => handleUpdateClick(user._id)}>
                                        <img src={SaveUpdate} alt=""
                                            className='btnIcon-userList' title='Update' />
                                    </button>
                                    <button className='btn-userList'
                                        onClick={() => handleDeleteClick(user._id)}>
                                        <img src={DeleteAccoutn} alt="" className='btnIcon-userList' title='Delete' />
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <Modal isOpen={activeModal === "updateAccount"} onClose={closeModal}>
                <UpdateProfileModal userId={selectedUserId} onClose={closeModal} />
            </Modal>

            <Modal isOpen={activeModal === "deleteAccountAdmin"} onClose={closeModal}>
                <DeleteAccountModalAdmin userId={selectedUserId} onClose={closeModal} />
            </Modal>
        </section>
    )
}

export default TableList