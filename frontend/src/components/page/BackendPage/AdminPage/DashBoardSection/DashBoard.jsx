import React from 'react'
import titleName from '../../../../hooks/useTitle';



//import css
import "./DashBoard.css"
import DashBoardLayout from './DashboardLayout/DashBoardLayout';
/* import TrafficDevice from '../../../../layouts/Charts/TrafficDevice'; */
import WebsiteVisits from '../../../../layouts/Charts/WebsiteVisits';
/* import VisitsByContinents from '../../../../layouts/Charts/VisitsByContinents'; */

const DashBoard = () => {
    titleName(`Admin Dashboard`)
    return (
        <DashBoardLayout>
            <section className='adminDashBoardSection'>
                <h1>DashBoard</h1>

                <main className='adminDashBoardMain'>
                    {/* <section className="dashboadTrackingSectionTopp">
                        <section>1</section>
                        <section>2</section>
                        <section>3</section>
                    </section> */}

                    {/* <section className="dashBoardTrafficDeviceThreeSection">
                        <h3 className='headerWebSiteVisitsSection'>Website visits</h3>
                        <WebsiteVisits />
                    </section> */}

                    <section className="dashboadTrackingSectionMiddle">

                        {/* <section className="dashBoardTrafficDeviceOneSection">
                            <h3 className='headerTrafficDevicesSection'>Traffic by Device</h3>
                            <TrafficDevice />
                        </section> */}

                        {/* <section className="dashBoardTrafficDeviceTwoSection">
                            <h3 className='headerCurrentVisitsSection'>Current Visits by Continents</h3>
                            <VisitsByContinents />
                        </section> */}

                    </section>
                    <section className="dashBoardTrafficDeviceThreeSection">
                        <h3 className='headerWebSiteVisitsSection'>Website visits</h3>
                        <WebsiteVisits />
                    </section>


                </main>
            </section>
        </DashBoardLayout>
    )
}

export default DashBoard