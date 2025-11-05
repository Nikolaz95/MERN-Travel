import React from 'react'
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

const DeleteAccount = () => {
    titleName(`Delete Account`);

    const user = {
        name: "John Doe",
        email: "n@gmail.com",
        createdAt: "2025-11-04",
        role: "admin"
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
                                <Button /* onClick={() => setActiveModal("deleteAccount")} */
                                    variant="deleteAccount" icon={DeleteBtn}
                                    title="Delete Account">
                                    <p>Delete Account</p>
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>
            </UserInfoLayout>
        </DashBoardLayout>
    )
}

export default DeleteAccount