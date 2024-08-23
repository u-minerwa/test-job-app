import React from 'react';
import { Line } from 'react-chartjs-2';
// import classes from "./LineChart.module.css"

const LineChart = () => {
    const data = {
        labels: ['2015', '2016', '2017', '2018', '2019', '2020'], // Годы по оси X
        datasets: [
            {
                label: 'Процентное значение',
                data: [35, 40, 45, 50, 55, 60], // Значения по оси Y
                fill: false,
                backgroundColor: 'rgb(75, 192, 192)',
                borderColor: 'rgba(75, 192, 192, 0.2)',
            },
        ],
    };

    const options = {
        scales: {
            y: {
                min: 35,
                max: 60,
                ticks: {
                    stepSize: 5, // Шаг в 5%
                }
            }
        }
    };

    return (
        <div>
            <Line data={data} options={options} />
        </div>
    );
};

export default LineChart;
