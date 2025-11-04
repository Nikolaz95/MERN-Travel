import React from 'react'

//import css
import "./TableList.css"

//import images
import UpdateAcc from "../../../../../../assets/icons/iconUpdate.png"
import DeleteAcc from "../../../../../../assets/icons/iconDelAcc.png"

const TableList = () => {
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
                    {/* {currentUsers.map((user) => ( */}
                    <tr /* key={user._id} */>
                        <td># 12315125215</td>
                        <td>nikola</td>
                        <td>n@gmail.com</td>
                        <td>2025-11-04</td>
                        <td>user</td>
                        <td>
                            <div className='btn-userListContent'>
                                <button className='btn-userList'
                                        /* onClick={() => handleUpdateClick(user._id)} */>
                                    <img src={UpdateAcc} alt=""
                                        className='btnIcon-userList' title='Update' />
                                </button>
                                <button className='btn-userList'
                                        /* onClick={() => handleDeleteClick(user._id)} */>
                                    <img src={DeleteAcc} alt="" className='btnIcon-userList' title='Delete' />
                                </button>
                            </div>
                        </td>
                    </tr>
                    {/* ))} */}
                </tbody>
            </table>

            {/* <Modal isOpen={activeModal === "updateAccount"} onClose={closeModal}>
                <UpdateProfileModal userId={selectedUserId} onClose={closeModal} />
            </Modal> */}

            {/* <Modal isOpen={activeModal === "deleteAccount"} onClose={closeModal}>
                <DeleteAccountModal userId={selectedUserId} onClose={closeModal} />
            </Modal> */}
        </section>
    )
}

export default TableList