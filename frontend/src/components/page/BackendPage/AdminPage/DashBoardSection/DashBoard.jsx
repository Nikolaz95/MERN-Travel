import React from 'react'
import titleName from '../../../../hooks/useTitle';



//import css
import "./DashBoard.css"
import DashBoardLayout from './DashboardLayout/DashBoardLayout';

const DashBoard = () => {
    titleName(`Admin Dashboard`)
    return (
        <DashBoardLayout>
            <section className='adminDashBoardSection'>
                <h1>DashBoard</h1>
                <section className='adminContentDashBoard'>
                    <div className="adminDashboarContentTop">

                    </div>
                </section>
            </section>
        </DashBoardLayout>
    )
}

export default DashBoard