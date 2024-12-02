import React from 'react';
import dynamic from "next/dynamic";

const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });
import { Card, CardBody, CardSubtitle, CardTitle } from 'reactstrap';

const ColumnChart = () => {
  const seriesData = [{
    name: 'Net Profit',
    data: [9,44, 55, 57, 56, 61, 58, 63, 60, 66, 72, 60, 55]
  }, {
    name: 'Revenue',
    data: [5,76, 85, 101, 98, 87, 105, 91, 114, 94, 74, 81, 23]
  }, {
    name: 'Free Cash Flow',
    data: [0,35, 41, 36, 26, 45, 48, 52, 53, 41, 45, 32, 38]
  }];

  const options = {
    chart: {
      type: 'bar',
      height: 350
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        endingShape: 'rounded'
      },
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent']
    },
    xaxis: {
      categories: ['Jan','Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan'],
    },
    yaxis: {
      title: {
        text: '$ (thousands)'
      }
    },
    fill: {
      opacity: 1
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return "$ " + val + " thousands"
        }
      }
    }
  };

  return (
    <Card style={{width: '65%'}}>
      <CardBody>
        <CardTitle tag="h5">Sales Summary</CardTitle>
        <CardSubtitle className="text-muted" tag="h6">
          Yearly Sales Report
        </CardSubtitle>
        <ReactApexChart options={options} series={seriesData} type="bar" height={350} />
        </CardBody>
        </Card>
  );
};

export default ColumnChart;
