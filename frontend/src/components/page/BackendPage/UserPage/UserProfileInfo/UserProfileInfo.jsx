import React from 'react'

//import css
import "./UserProfileInfo.css"

//import images
import { AvatarDefault } from '../../../../../assets/Icons';
//import components
import titleName from '../../../../hooks/useTitle';
import DashBoardLayout from '../../AdminPage/DashBoardSection/DashboardLayout/DashBoardLayout';
import UserInfoLayout from '../Layouts/UserInfoLayout';
import Image from '../../../../layouts/Images/Image';

const UserProfileInfo = () => {
    titleName(`Profile Info`);
    const user = {
        name: "John Doe",
        email: "n@gmail.com",
        createdAt: "2025-11-04",
        role: "admin"
    };
    return (
        <DashBoardLayout>
            <h1>Profile Info</h1>

            <UserInfoLayout>
                <div className="userProfileConteiner">
                    <div className="userProfileConteinerTop">
                        <Image src={
                            user?.avatar ? user?.avatar?.url : AvatarDefault
                        }
                            variant="profile"
                            className='userProfileImg' alt="userImg" />
                    </div>
                    <div className="userProfileConteinerBottom">
                        <div className="userProfileNameContent">
                            <h1>Full Name:</h1>
                            <p>{user?.name}</p>
                        </div>
                        <div className="userProfileEmailContent">
                            <h1>Email:</h1>
                            <p>{user?.email}</p>
                        </div>
                        <div className="userProfileJoinedContent">
                            <h1>Joined On:</h1>
                            <p>{user?.createdAt?.substring(0, 10)}</p>
                        </div>
                    </div>
                </div>
            </UserInfoLayout>

        </DashBoardLayout>
    )
}

export default UserProfileInfo