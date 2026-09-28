import React from 'react'

//import css
import "./UserProfileInfo.css"

//import images
import { AvatarDefault } from '../../../../../assets/Icons';
//import components
import titleName from '../../../../hooks/useTitle';
import DashBoardLayout from '../../AdminPage/DashBoardSection/DashboardLayout/DashBoardLayout';
import Image from '../../../../layouts/Images/Image';
import Navigation from '../../../../layouts/NavigatioLinkComponent/Navigation';
import { useSelector } from 'react-redux';
import { useGetVisitListQuery } from '../../../../../redux/api/visitListApi';
import { formatDate } from '../../../../../utils/formatDate';

const UserProfileInfo = () => {
    titleName(`Profile Info`);
    const { user } = useSelector((state) => state.auth);

    const { data } = useGetVisitListQuery();
    const visits = data?.userVisitList || [];
    const countryCount = new Set(visits.map((visit) => visit.countryName)).size;

    return (
        <DashBoardLayout title="Profile" subtitle="Your account at a glance.">
            <div className="profilePage">
                <section className="dashCard profileCard">
                    <Image src={user?.avatar?.url || AvatarDefault} alt="" variant="profileAvatar" />
                    <div className="profileInfo">
                        <h2 className="profileName">{user?.name}</h2>
                        <p className="profileEmail">{user?.email}</p>
                        <span className="profileRole">{user?.role}</span>
                    </div>
                </section>

                <dl className="profileStats">
                    <div className="dashCard profileStat">
                        <dt>Member since</dt>
                        <dd>{formatDate(user?.createdAt)}</dd>
                    </div>
                    <div className="dashCard profileStat">
                        <dt>Places visited</dt>
                        <dd>{visits.length}</dd>
                    </div>
                    <div className="dashCard profileStat">
                        <dt>Countries</dt>
                        <dd>{countryCount}</dd>
                    </div>
                </dl>

                <div className="dashActions">
                    <Navigation to="/user/update-Profile" variant="dashLinkButton">✏️ Edit profile</Navigation>
                    <Navigation to="/user/update-Picture" variant="dashLinkButton">📷 Change picture</Navigation>
                    <Navigation to="/user/update-Password" variant="dashLinkButton">🔒 Change password</Navigation>
                </div>
            </div>
        </DashBoardLayout>
    )
}

export default UserProfileInfo
