import React from "react";
import dynamic from "next/dynamic";

const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });
import { Card, CardBody, CardSubtitle, CardTitle } from "reactstrap";

const PieChart = ({}) => {
  const chartData = {
    labels: ["Team A", "Team B", "Team C", "Team D"],
    series: [44, 55, 13, 43],
  };

  const chartOptions = {
    labels: chartData.labels,
  };

  return (
    <Card style={{ width: "32%" }}>
      <CardBody>
        <CardTitle tag="h5">Feeds</CardTitle>
        <CardSubtitle className="mb-2 text-muted" tag="h6">
          Widget you can use
        </CardSubtitle>
        <ReactApexChart
          options={chartOptions}
          series={chartData.series}
          type="pie"
          width="450"
        />
      </CardBody>
    </Card>
  );
};

export default PieChart;
