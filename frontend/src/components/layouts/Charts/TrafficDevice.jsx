import React, { useEffect, useState } from 'react'
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
ChartJS.register(ArcElement, Tooltip, Legend);


const TrafficDevice = () => {
    const isLoading = false;
    const devices = [
        { _id: "Mobile", count: 450 },
        { _id: "Desktop", count: 300 },
        { _id: "Tablet", count: 150 }
    ];

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
                            'rgba(54, 162, 235, 0.8)',   // Plava
                            'rgba(255, 99, 132, 0.8)',   // Crvena
                            'rgba(255, 206, 86, 0.8)',   // Žuta
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
    }, [isLoading]);

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'bottom',
            },
        }
    };


    return (
        <section className="chartSection" style={{ width: '450px', height: '400px', padding: '20px', border: '1px solid #ddd', borderRadius: '8px' }}>
            <h3 style={{ textAlign: 'center' }}>Saobraćaj po uređaju</h3>
            {chartData.datasets.length > 0 ? (
                /* 2. Zamijeni komponentu sa Pie */
                <Pie data={chartData} options={options} />
            ) : (
                <div style={{ textAlign: 'center', marginTop: '100px' }}>Učitavanje podataka...</div>
            )}
        </section>
    )
}

export default TrafficDevice