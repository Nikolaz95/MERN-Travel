import React, { useEffect, useState } from 'react'
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { useGetVisitsByDeviceQuery } from '../../../redux/api/visitsStatsApi';
ChartJS.register(ArcElement, Tooltip, Legend);


const TrafficDevice = () => {
    const { data, isLoading } = useGetVisitsByDeviceQuery();
    const devices = data?.devices || [];

    console.log(devices);


    const [chartData, setChartData] = useState({
        labels: [],
        datasets: []
    });
    // Transformacija podataka iz API-ja u Chart.js format
    useEffect(() => {
        if (!isLoading && devices.length > 0) {
            setChartData({
                labels: devices.map(d => d._id),
                datasets: [
                    {
                        label: "Visits by device",
                        data: devices.map(d => d.count),
                        backgroundColor: [
                            'rgba(54, 162, 235, 0.8)',   // Mobile
                            'rgba(255, 99, 132, 0.8)',   // Desktop
                            'rgba(255, 206, 86, 0.8)',   // Tablet
                        ],
                        borderColor: [
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 99, 132, 1)',
                            'rgba(255, 206, 86, 1)',
                        ],
                        borderWidth: 1,
                    }
                ]
            });
        }
    }, [isLoading, devices]);

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
        <section className="chartSection" style={{ width: '450px', height: '350px', padding: '20px', border: '1px solid #ddd', borderRadius: '8px' }}>
            {/* Proveravamo da li imamo podatke pre renderovanja */}
            {chartData.datasets.length > 0 ? (
                <Doughnut data={chartData} options={options} />
            ) : (
                <div>Učitavanje podataka...</div>
            )}
        </section>
    )
}

export default TrafficDevice