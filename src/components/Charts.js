import React from 'react';
import { Line } from 'react-chartjs-2';

const Charts = () => {
    const data = {
        labels: ['January', 'February', 'March', 'April'],
        datasets: [
            {
                label: 'Heart Rate (bpm)',
                data: [72, 75, 70, 74],
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
            },
        ],
    };

    return <Line data={data} />;
};

export default Charts;
