import React, { useState } from 'react'
import titleName from '../../../../hooks/useTitle';


//import components
import DashBoardLayout from '../../AdminPage/DashBoardSection/DashboardLayout/DashBoardLayout';
import Button from '../../../../layouts/Buttons/Button';
import Modal from '../../../../layouts/ModalComponent/Modal';
import DeleteAccountModalUser from '../../../../layouts/ModalComponent/ModalLayouts/ModalContent/DeleteAccountModal/DeleteAccountModalUser';

const DeleteAccount = () => {
    titleName(`Delete Account`);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const closeModal = () => setIsModalOpen(false);

    return (
        <DashBoardLayout title="Delete account" subtitle="Permanently remove your Travel Diary account.">
            <section className="dashCard dashNarrow dashDangerCard">
                <h2 className="dashCardTitle">Delete your account</h2>
                <p className="dashCardText">
                    Your profile and profile picture will be removed and you will be logged out.
                    Once it's deleted, the account can't be restored.
                </p>
                <div className="dashActions" style={{ marginTop: 20 }}>
                    <Button type="button" variant="danger" onClick={() => setIsModalOpen(true)}>
                        Delete account
                    </Button>
                </div>
            </section>

            {/* Modal for delete modal */}
            <Modal isOpen={isModalOpen} onClose={closeModal}>
                <DeleteAccountModalUser onClose={closeModal} />
            </Modal>
        </DashBoardLayout>
    )
}

export default DeleteAccount
