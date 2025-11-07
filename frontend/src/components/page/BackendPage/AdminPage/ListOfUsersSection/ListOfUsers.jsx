import React, { useEffect, useState } from 'react'
import titleName from '../../../../hooks/useTitle';
//import css
import "./ListOfUsers.css"
import DashBoardLayout from '../DashBoardSection/DashboardLayout/DashBoardLayout'
import TableList from './TableContent/TableList';
import { useGetAdminUsersQuery } from '../../../../../redux/api/userApi';
import PaginationComponent from './TableContent/PaginationComponent';

const ListOfUsers = () => {
    titleName(`List Of Users`)
    const [currentPage, setCurrentPage] = useState(1);
    const usersPerPage = 10;
    const { data, isLoading, isError, error } = useGetAdminUsersQuery();


    const users = data?.users || [];

    // Pagination calculations
    const indexOfLastUser = currentPage * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;
    const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

    // Calculate the total number of pages
    const totalPages = Math.ceil(users.length / usersPerPage);

    // Handle page change
    const handleChange = (event, value) => {
        setCurrentPage(value);
    };


    useEffect(() => {
        if (isError) {
            toast.error(error?.data?.message || 'Failed to fetch users');
        }
    }, [isError, error]);


    return (
        <DashBoardLayout>
            <section className='listOfUsersSection'>
                <h1>List Of Users : {users.length}</h1>

                <TableList currentUsers={currentUsers} />

                <PaginationComponent
                    totalPages={totalPages}
                    currentPage={currentPage}
                    handleChange={handleChange}
                />
            </section>

        </DashBoardLayout>
    )
}

export default ListOfUsers