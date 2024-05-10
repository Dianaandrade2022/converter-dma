import { Chart as Chartjs, ChartConfiguration, registerables } from 'chart.js';
import { Line } from 'react-chartjs-2';
import React, { useEffect, useState } from 'react';
import { Card, CardHeader,CardBody } from 'reactstrap';

Chartjs.register(...registerables);

const ChartComponent = () => {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        label: '',
        data: [],
        fill: false,
        borderColor: '#6E32CB',
        tension: 0.2,
        backgroundColor:'#855AC6'
      }
    ]
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = {
          "quotes": {
            "1992": 5.109727,
            "1993": 107.750768,
            "1994": 11.659078,
            "1995": 75.255305,
            "1996": 2.496633,
            "1997": 99.923974,
            "1998": 130.481869,
            "1999": 12.789173,
            "2000": 25.503947,
            "2001": 24.357994,
            "2002": 24.253445,
            "2004": 23.808295,
            "2005": 11.867727,
            "2006": 2.253678,
            "2007": 0.524384,
            "2008": 27.310462,
          }
        };

        const labels = Object.keys(response.quotes);
        const data = Object.values(response.quotes);

        setChartData({
          labels: labels,
          datasets: [
            {
              ...chartData.datasets[0],
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
    <Card>
      <CardHeader>
        <h5 className="h3 mb-0">Line chart</h5>
      </CardHeader>
      <CardBody>
        <div className="chart">
          <Line
            data={chartData}
            options={{
              scales: {
                x: {
                  type: 'category' 
                },
                y: {
                  beginAtZero: true 
                }
              },
              plugins: {
                title: {
                  display: true,
                }
              }
            }}
            className="chart-canvas"
          />
        </div>
      </CardBody>
    </Card>
  );
};

export default ChartComponent;
