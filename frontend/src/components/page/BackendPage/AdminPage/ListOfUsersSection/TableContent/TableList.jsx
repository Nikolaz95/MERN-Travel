import React, { useState } from 'react'

//import css
import "./TableList.css"

//import images
import { AvatarDefault } from '../../../../../../assets/Icons'
import Image from '../../../../../layouts/Images/Image';
import Modal from '../../../../../layouts/ModalComponent/Modal';
import UpdateProfileModal from '../../../../../layouts/ModalComponent/ModalLayouts/ModalContent/UpdateProfileModal.jsx/UpdateProfileModal';

import DeleteAccountModalAdmin from '../../../../../layouts/ModalComponent/ModalLayouts/ModalContent/DeleteAccountModal/DeleteAccountModalAdmin';
import { formatDate } from '../../../../../../utils/formatDate';

const TableList = ({ currentUsers }) => {
    // State to track which modal is open
    const [activeModal, setActiveModal] = useState("");
    const [selectedUser, setSelectedUser] = useState(null);
    // Function to close the modal
    const closeModal = () => setActiveModal("");

    const handleUpdateClick = (user) => {
        setSelectedUser(user);
        setActiveModal("updateAccount");
    };

    const handleDeleteClick = (user) => {
        setSelectedUser(user);
        setActiveModal("deleteAccountAdmin");
    };
    return (
        <section className='tableSection'>
            <table className="usersTable">
                <thead>
                    <tr>
                        <th scope="col">User</th>
                        <th scope="col">Email</th>
                        <th scope="col">Role</th>
                        <th scope="col">Joined</th>
                        <th scope="col"><span className="visuallyHidden">Actions</span></th>
                    </tr>
                </thead>

                <tbody>
                    {currentUsers.map((user) => (
                        <tr key={user._id}>
                            <td data-label="User">
                                <div className="usersTableUser">
                                    <Image src={user.avatar?.url || AvatarDefault} alt="" variant="tableAvatar" />
                                    <div className="usersTableUserText">
                                        <p className="usersTableName">{user.name}</p>
                                        <p className="usersTableId" title={user._id}>#{user._id.slice(-6)}</p>
                                    </div>
                                </div>
                            </td>
                            <td data-label="Email" className="usersTableEmail">{user.email}</td>
                            <td data-label="Role">
                                <span className={`roleBadge ${user.role === "admin" ? "isAdmin" : ""}`}>{user.role}</span>
                            </td>
                            <td data-label="Joined">{formatDate(user.createdAt)}</td>
                            <td className="usersTableActions">
                                <button type="button" className='userActionBtn'
                                    onClick={() => handleUpdateClick(user)}>
                                    Edit
                                </button>
                                <button type="button" className='userActionBtn isDanger'
                                    onClick={() => handleDeleteClick(user)}>
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <Modal isOpen={activeModal === "updateAccount"} onClose={closeModal}>
                <UpdateProfileModal userId={selectedUser?._id} onClose={closeModal} />
            </Modal>

            <Modal isOpen={activeModal === "deleteAccountAdmin"} onClose={closeModal}>
                <DeleteAccountModalAdmin userId={selectedUser?._id} userName={selectedUser?.name} onClose={closeModal} />
            </Modal>
        </section>
    )
}

export default TableList
