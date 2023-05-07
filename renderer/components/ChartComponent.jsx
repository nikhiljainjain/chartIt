import React from 'react';
import { Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto';


const LineChart = ({ chartLoadingData }) => {
  
  const data = {
    labels: ['Label 1', 'Label 2', 'Label 3', 'Label 4', 'Label 5', 'Label 6', 'Label 7', 'Label 8'],
    datasets: [
      {
        label: 'Data Set 1',
        data: chartLoadingData,
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
      }
    ]
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  };

  return (
    <>
      <div className='header'>
        <h1 className='title'>Line Chart</h1>
      </div>
      <Line data={data} options={options} />
    </>
  )
};

export default LineChart;
