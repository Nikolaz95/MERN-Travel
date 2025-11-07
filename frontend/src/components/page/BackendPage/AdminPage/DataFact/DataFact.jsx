import React from 'react'
import titleName from '../../../../hooks/useTitle';
import DashBoardLayout from '../DashBoardSection/DashboardLayout/DashBoardLayout';

const DataFact = () => {
    titleName(`Data Fact`)
    return (
        <DashBoardLayout>
            <h1>Data Fact</h1>

        </DashBoardLayout>
    )
}

export default DataFact