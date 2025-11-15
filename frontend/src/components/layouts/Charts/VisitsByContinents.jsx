import React, { useEffect, useState } from 'react'
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { useGetVisitsByContinentQuery } from '../../../redux/api/visitsStatsApi';
ChartJS.register(ArcElement, Tooltip, Legend);


const VisitsByContinents = () => {

    const { data, isLoading } = useGetVisitsByContinentQuery();
    const continents = data?.continents || [];


    const [chartData, setChartData] = useState({
        labels: [],
        datasets: []
    });

    // Transformacija podataka iz API-ja u Chart.js format
    useEffect(() => {
        if (!isLoading && continents.length > 0) {
            setChartData({
                labels: continents.map(c => c._id),
                datasets: [
                    {
                        label: 'Visits by Continent',
                        data: continents.map(c => c.count),
                        backgroundColor: [
                            'rgb(254,214,49)',  // Africa
                            'rgb(243,64,1)',    // Asia
                            'rgb(153,153,153)', // Australia
                            'rgb(0,187,233)',   // Europe
                            'rgb(0,66,255)',    // Antarctica
                            'rgb(0,204,0)',     // North America
                            'rgb(0,129,0)',     // South America
                        ],
                        borderColor: [
                            'rgb(254,214,49)',
                            'rgb(243,64,1)',
                            'rgb(153,153,153)',
                            'rgb(0,187,233)',
                            'rgb(0,66,255)',
                            'rgb(0,204,0)',
                            'rgb(0,129,0)',
                        ],
                        borderWidth: 1,
                    }
                ]
            });
        }
    }, [isLoading, continents]);

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'bottom', // Premestili smo legendu dole
            },
            /* title: {
                display: true,
                text: 'Saobraćaj po tipu uređaja',
                font: {
                    size: 16,
                }
            } */
        }
    };


    return (
        <section className="chartVisitByContninentsSection" style={{ width: '450px', height: '350px', padding: '20px', border: '1px solid #ddd', borderRadius: '8px' }}>
            {/* Proveravamo da li imamo podatke pre renderovanja */}
            {chartData.datasets.length > 0 ? (
                <Doughnut data={chartData} options={options} />
            ) : (
                <div>Učitavanje podataka...</div>
            )}
        </section>
    )
}

export default VisitsByContinents