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
                <main className='adminDashBoardMainContent'>
                    <div className="adminDashboarContentTop">
                        <div className="dashBoardTopContent">1</div>
                        <div className="dashBoardTopContent">2</div>
                        <div className="dashBoardTopContent">3</div>
                        <div className="dashBoardTopContent">4</div>
                    </div>

                    <div className="adminDashboarContentMiddle">
                        <div className="dashBoardMiddleContent">1</div>
                        <div className="dashBoardMiddleContent">2</div>
                    </div>
                </main>
            </section>
        </DashBoardLayout>
    )
}

export default DashBoard