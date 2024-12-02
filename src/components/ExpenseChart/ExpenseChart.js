// "use client"
import { Card, CardBody, CardSubtitle, CardTitle } from "reactstrap";
import dynamic from "next/dynamic";

const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });


const ExpenseChart = () => {
  const chartoptions = {
    series: [
      {
        name: "Iphone 13",
        data: [0, 31, 40, 28, 51, 42, 109, 100],
      },
      {
        name: "Oneplue 9",
        data: [0, 11, 32, 45, 32, 34, 52, 41],
      },
      // {
      //   name: "Iphone 12",
      //   data: [25, 35, 40, 231, 51, 42, 19, 100],
      // },
      // {
      //   name: "Oneplue 8",
      //   data: [0, 11, 22, 48, 12, 40, 52, 41],
      // },
    ],
    options: {
      chart: {
        type: "area",
      },
      dataLabels: {
        enabled: false,
      },
      grid: {
        strokeDashArray: 3,
      },

      stroke: {
        curve: "smooth",
        width: 1,
      },
      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "March",
          "April",
          "May",
          "June",
          "July",
          "Aug",
        ],
      },
    },
  };
  return (
    <Card style={{width: '65%'}}>
      <CardBody>
        <CardTitle tag="h5">Sales Summary</CardTitle>
        <CardSubtitle className="text-muted" tag="h6">
          Yearly Sales Report
        </CardSubtitle>
        <ReactApexChart
          type="area"
          width="100%"
          height="390"
          options={chartoptions.options}
          series={chartoptions.series}
        ></ReactApexChart>
      </CardBody>
    </Card>
  );
};

export default ExpenseChart;
