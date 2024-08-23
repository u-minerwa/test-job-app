import React from "react";
import { Line } from "react-chartjs-2";
import {
    Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineController, Title,
    Tooltip, Filler, Legend, LineElement
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineController,
    Title,
    Tooltip,
    Filler,
    LineElement,
    Legend
);


const labels = ["2015", "2016", "2017", "2018", "2019", "2020"];
const data = {
    labels: labels,
    datasets: [
        {
            label: "Percents",
            backgroundColor: "rgba(224, 30, 46, 0.2)",
            borderColor: "rgba(224, 30, 46, 1)",
            data: [38, 43, 49, 51, 54, 56],
            pointBackgroundColor: "rgba(224, 30, 46, 1)",
            pointBorderColor: "#fff",
            pointBorderWidth: 0,
            pointRadius: 4,
            tension: 0.4
        },
    ],
};

const options = {
    plugins: {
        legend: {
            display: false
        },
        tooltip: {
            callbacks: {
                label: function (context) {
                    const label = context.dataset.label || '';
                    if (label) {
                        let labelText = label;
                        return labelText + ': ' + context.parsed.y + '%';
                    }
                }
            }
        }
    },
    scales: {
        x: {
            gridLines: {
                drawOnChartArea: false,
            },
            ticks: {
                callback: function (value, index, values) {
                    const chartDataLabels = this.chart.data.labels;
                    return chartDataLabels[index];
                },
                font: {
                    size: 14,
                    weight: 'bold',
                    family: 'Arial'
                },
            },
        },
        y: {
            min: 35,
            max: 60,
            ticks: {
                callback: function (value, index, values) {
                    return value + '%';
                },
                stepSize: 5,
                font: {
                    size: 14,
                    weight: 400,
                    family: 'Arial'
                }
            },
            gridLines: {
                color: function (context) {
                    const chartArea = context.chart.chartArea;
                    const yScale = context.chart.scales['y-axis-0'];
                    const top = yScale.getPixelForTick(0);
                    const bottom = yScale.getPixelForTick(yScale.ticks.length - 1);

                    const gradient = context.chart.ctx.createLinearGradient(top, chartArea.top, bottom, chartArea.bottom);
                    gradient.addColorStop(0, 'rgba(128, 128, 128, 1)');
                    gradient.addColorStop(1, 'rgba(255, 255, 255, 0.5)');
                    return gradient;
                }
            }
        }
    }
};

const LineChart = () => {
    return (
        <div>
            <Line data={data} options={options} />
        </div>
    );
};

export default LineChart;
