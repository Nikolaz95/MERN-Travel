import React from 'react'
import titleName from '../../../../hooks/useTitle';
import DashBoardLayout from '../DashBoardSection/DashboardLayout/DashBoardLayout';

const DataFact = () => {
    titleName(`Data Fact`)
    return (
        <DashBoardLayout title="Data facts">
            <div className="dashCard dashEmpty">
                <span className="dashEmptyIcon" aria-hidden="true">📊</span>
                <h2 className="dashCardTitle">Coming soon</h2>
                <p className="dashCardText">Interesting facts about your travellers will show up here.</p>
            </div>
        </DashBoardLayout>
    )
}

export default DataFact
