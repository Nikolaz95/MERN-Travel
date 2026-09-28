import React, { useState, useMemo } from 'react';
import { Bar } from 'react-chartjs-2';

import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const dataSets = {
    // 1. DNEVNO: Usporedba posjeta po danima u tjednu
    daily: {
        labels: ['Pon', 'Uto', 'Sri', 'Čet', 'Pet', 'Sub', 'Ned'],
        datasets: [
            {
                label: 'Dnevne posete (Prosjek)',
                data: [1200, 1500, 1400, 1800, 2500, 3100, 2000],
                backgroundColor: 'rgba(52, 152, 219, 0.8)', // Plava
                borderColor: 'rgba(52, 152, 219, 1)',
                borderWidth: 1,
            },
        ],
    },
    // 2. TJEDNO: Usporedba posjeta po tjednima (npr. u zadnjem mjesecu)
    weekly: {
        labels: ['Tjedan 1', 'Tjedan 2', 'Tjedan 3', 'Tjedan 4',],
        datasets: [
            {
                label: 'Ukupne posete po tjednu',
                data: [15500, 16200, 14800, 17900],
                backgroundColor: 'rgba(46, 204, 113, 0.8)', // Zelena
                borderColor: 'rgba(46, 204, 113, 1)',
                borderWidth: 1,
            },
        ],
    },
    // 3. GODIŠNJE: Usporedba Trenutne i Prošle godine
    yearly: {
        labels: ['Prošla godina', 'Trenutna godina'],
        datasets: [
            {
                label: 'Ukupne godišnje posete',
                data: [1250000, 1480000],
                backgroundColor: 'rgba(230, 126, 34, 0.8)', // Narandžasta
                borderColor: 'rgba(230, 126, 34, 1)',
                borderWidth: 1,
            },
        ],
    },
};


const WebsiteVisits = () => {
    const [view, setView] = useState('daily');
    const chartData = useMemo(() => dataSets[view], [view]);

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            /* title: {
                display: true,
                text: `Posjetiteljstvo - Prikaz: ${view === 'daily' ? 'Dnevno' : view === 'weekly' ? 'Tjedno' : 'Godišnje'
                    }`,
                font: { size: 18 }
            }, */
            legend: {
                display: false,
            },
        },
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Broj poseta'
                }
            }
        }
    };

    const buttonStyle = (isActive) => ({
        padding: '8px 15px',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        fontWeight: 'bold',
        backgroundColor: isActive ? '#3498db' : '#ecf0f1',
        color: isActive ? '#fff' : '#2c3e50',
        transition: 'background-color 0.2s, color 0.2s',
        margin: '0 5px',
    });


    return (
        <section style={{ width: '100%', maxWidth: '800px', margin: '20px auto', padding: '20px', border: '1px solid #ddd', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>

            {/* Kontejner za dugmad */}
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
                <button style={buttonStyle(view === 'daily')}
                    onClick={() => setView('daily')}>
                    Daily
                </button>
                <button style={buttonStyle(view === 'weekly')}
                    onClick={() => setView('weekly')}>
                    Weekly
                </button>
                <button style={buttonStyle(view === 'yearly')}
                    onClick={() => setView('yearly')}>
                    Yearly
                </button>
            </div>

            {/* Kontejner za Bar Chart */}
            <div style={{ height: '250px' }}>
                <Bar data={chartData} options={options} />
            </div>

        </section>
    )
}

export default WebsiteVisits
