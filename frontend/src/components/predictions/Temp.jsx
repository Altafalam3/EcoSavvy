import { useState, useEffect } from 'react';
import axios from 'axios';
import { Chart } from "react-google-charts";

function PredictionList() {
  const [predictions, setPredictions] = useState([]);
  const [chartData, setChartData] = useState([['Category', 'Value']])

  const options = {
    title: "Predictions piechart",
  };

  useEffect(() => {
    axios.get('http://localhost:8000/api/predictions/')
      .then(response => {
        const data = response.data;
        setPredictions(data);
        // Extract percentages from prediction data
        const percentages = data.reduce((acc, prediction) => {
          const category = prediction.prediction.split(' - ')[0];
          const percentage = parseInt(prediction.prediction.split(' - ')[1]);
          if (!acc[category]) {
            acc[category] = percentage;
          } else {
            acc[category] += percentage;
          }
          return acc;
        }, {});
        console.log(percentages);
        // Convert percentages object to array of objects for Recharts
        const chartData = Object.keys(percentages).map(category => {
          return [category, percentages[category]];
        });
        console.log(chartData);
        setChartData(chartData);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h1>List of all Wastes</h1>
      <ul>
        {predictions.map(prediction => (
          <li key={prediction.id}>
            {prediction.text} - {prediction.prediction}
          </li>
        ))}
      </ul>
      <Chart
        chartType="PieChart"
        data={chartData}
        options={options}
        width={"100%"}
        height={"400px"}
      />

    </div>
  );
}

export default PredictionList;
