import React, { useState, useEffect } from 'react';
import dynamic from "next/dynamic";

const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });
const LineChart = () => {
  const [series, setSeries] = useState([{ data: [] }]);
  const [lastDate, setLastDate] = useState(Date.now());

  const generateData = () => {
    const newDataPoint = {
      x: lastDate + 86400000, // Adding 1 day in milliseconds
      y: Math.floor(Math.random() * 100) // Random data point
    };

    // Shift the old data point out if more than 10 data points
    if (series[0].data.length > 10) {
      series[0].data.shift();
    }

    // Add new data point
    setSeries([{ data: [...series[0].data, newDataPoint] }]);
    setLastDate(newDataPoint.x);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      generateData();
    }, 1000); // Change data every 1 second

    return () => clearInterval(interval);
  }, [lastDate, series]);

//   const options = {
//     chart: {
//       id: 'realtime',
//       height: 350,
//       type: 'line',
//       animations: {
//         enabled: true,
//         easing: 'linear',
//         dynamicAnimation: {
//           speed: 2000
//         }
//       },
//       toolbar: {
//         show: false
//       }
//     },
//     dataLabels: {
//       enabled: false
//     },
//     stroke: {
//       curve: 'smooth'
//     },
//     title: {
//       text: 'Running Line Chart',
//       align: 'left'
//     },
//     markers: {
//       size: 0
//     },
//     xaxis: {
//       type: 'datetime'
//     },
//     yaxis: {
//       max: 100
//     },
//     legend: {
//       show: false
//     }
//   };

var options = {
    chart: {
    id: 'realtime',
    height: 350,
    type: 'line',
    animations: {
      enabled: true,
      easing: 'linear',
      dynamicAnimation: {
        speed: 1000
      }
    },
    toolbar: {
      show: false
    },
    zoom: {
      enabled: false
    }
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: 'smooth'
  },
  title: {
    text: 'Dynamic Updating Chart',
    align: 'left'
  },
  markers: {
    size: 0
  },
  xaxis: {
    type: 'datetime',
    range: 86400000,
  },
  yaxis: {
    max: 100
  },
  legend: {
    show: false
  },
  };

  return (
    <div>
      <ReactApexChart options={options} series={series} type="line" height={350} />
    </div>
  );
};

export default LineChart;
