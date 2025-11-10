import React from 'react'
import titleName from '../../../../hooks/useTitle';

import DashBoardLayout from '../../AdminPage/DashBoardSection/DashboardLayout/DashBoardLayout'
import { useGetVisitListQuery } from '../../../../../redux/api/visitListApi';

//import css
import "./UserTravelList.css"

const UserTravelList = () => {
    titleName(`Users Travels`);

    //Fetch Visit list from user
    const { data, isLoading } = useGetVisitListQuery();
    console.log(data);


    return (
        <DashBoardLayout>
            <h1>Your Travels: {data?.userVisitList?.length}</h1>
            <section className='usertraveListSection'>
                <div className='Card'>
                    <h1>disi</h1>
                </div>
                <div className='Card'>
                    <h1>disi</h1>
                </div>
                <div className='Card'>
                    <h1>disi</h1>
                </div>
                <div className='Card'>
                    <h1>disi</h1>
                </div>
                <div className='Card'>
                    <h1>disi</h1>
                </div>
                <div className='Card'>
                    <h1>disi</h1>
                </div>
            </section>
        </DashBoardLayout>
    )
}

export default UserTravelList