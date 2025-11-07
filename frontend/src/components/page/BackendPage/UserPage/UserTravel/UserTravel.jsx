import React from 'react'
import titleName from '../../../../hooks/useTitle';

import DashBoardLayout from '../../AdminPage/DashBoardSection/DashboardLayout/DashBoardLayout'

const UserTravel = () => {
    titleName(`Users Travels`);
    return (
        <DashBoardLayout>
            <h1>Your Travels</h1>
        </DashBoardLayout>
    )
}

export default UserTravel