import React, { useEffect, useState } from "react";
import { Scatter } from "react-chartjs-2";
import {
  Chart as Chartjs,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

Chartjs.register(
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend
);

export default function Chart() {
  const [chartData, setChartData] = useState({
    datasets: [],
  });

  const [chartOptions, setChartOptions] = useState({
    plugins: {
      title: {
        display: true,
      },
    },
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = {
          "success": true,
          "timestamp": 1620386223,
          "source": "GBP",
          "quotes": {
            "GBPAED": 5.109727,
            "GBPAFN": 107.750768,
            "GBPALL": 141.659078,
            "GBPAMD": 725.255305,
            "GBPANG": 2.496633,
            "GBPAOA": 909.923974,
            "GBPARS": 130.481869,
            "GBPAUD": 1.789173,
            "GBPAWG": 2.503947,
            "GBPAZN": 2.357994,
            "GBPBAM": 2.253445,
            "GBPBBD": 2.808295,
            "GBPBDT": 117.867727,
            "GBPBGN": 2.253678,
            "GBPBHD": 0.524384,
            "GBPBIF": 2747.310462,
            "GBPBMD": 1.391082,
            "GBPBND": 1.851765,
            "GBPBOB": 9.589957,
            "GBPBRL": 7.344636,
          }
        };

        const labels = Object.keys(response.quotes);
        const data = labels.map((label) => ({
          x: Math.random() * 100, 
          y: response.quotes[label],
        }));

        setChartData({
          datasets: [
            {
              label:'dma',
              data: data,
            },
          ],
        });
      } catch (error) {
        console.error("Error al obtener los datos:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Scatter data={chartData} options={chartOptions} />
    </>
  );
};


