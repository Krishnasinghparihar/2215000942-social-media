import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

s
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const SentimentChart = ({ data }) => {
    const chartData = {
        labels: ['Positive', 'Neutral', 'Negative'],
        datasets: [
            {
                label: 'Sentiment Analysis',
                data: [data.positive, data.neutral, data.negative],
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                fill: true
            }
        ]
    };

    return (
        <div className="chart-container">
            <h3>Sentiment Analysis</h3>
            <Line data={chartData} />
        </div>
    );
};

export default SentimentChart;
