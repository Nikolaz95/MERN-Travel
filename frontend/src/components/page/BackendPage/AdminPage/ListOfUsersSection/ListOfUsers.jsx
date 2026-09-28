import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import titleName from '../../../../hooks/useTitle';
//import css
import "./ListOfUsers.css"
import DashBoardLayout from '../DashBoardSection/DashboardLayout/DashBoardLayout'
import TableList from './TableContent/TableList';
import Loading from '../../../../layouts/Loading/Loading';
import { useGetAdminUsersQuery } from '../../../../../redux/api/userApi';
import PaginationComponent from './TableContent/PaginationComponent';

const ListOfUsers = () => {
    titleName(`List Of Users`)
    const [currentPage, setCurrentPage] = useState(1);
    const usersPerPage = 10;
    const { data, isLoading, isError, error } = useGetAdminUsersQuery();


    const users = data?.users || [];

    // Calculate the total number of pages
    const totalPages = Math.ceil(users.length / usersPerPage);

    // stay on a page that exists (e.g. after deleting the last user on the last page)
    const page = Math.min(currentPage, Math.max(totalPages, 1));

    // Pagination calculations
    const indexOfLastUser = page * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;
    const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

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
        <DashBoardLayout title="Users"
            subtitle={`${users.length} registered ${users.length === 1 ? "user" : "users"}`}>
            {isLoading ? (
                <Loading />
            ) : (
                <section className='dashCard listOfUsersCard'>
                    <TableList currentUsers={currentUsers} />

                    {totalPages > 1 && (
                        <PaginationComponent
                            totalPages={totalPages}
                            currentPage={page}
                            handleChange={handleChange}
                        />
                    )}
                </section>
            )}
        </DashBoardLayout>
    )
}

export default ListOfUsers
