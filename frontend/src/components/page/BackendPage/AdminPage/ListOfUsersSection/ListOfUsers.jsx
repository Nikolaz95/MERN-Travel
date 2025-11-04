import React from 'react'
import titleName from '../../../../hooks/useTitle';
//import css
import "./ListOfUsers.css"
import DashBoardLayout from '../DashBoardSection/DashboardLayout/DashBoardLayout'
import TableList from './TableContent/TableList';

const ListOfUsers = () => {
    titleName(`List Of Users`)
    return (
        <DashBoardLayout>
            <section className='listOfUsersSection'>
                <h1>List Of Users : 12344</h1>

                <TableList />

                <div>pagination 123</div>
            </section>

        </DashBoardLayout>
    )
}

export default ListOfUsers