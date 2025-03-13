"use client";
import "@/lib/chartConfig"; 
import { data } from "@/lib/data";
import { Pie } from "react-chartjs-2";
import { ChartData } from "chart.js/auto"; //TypeScript types

interface PieChartProps {
  chartData: ChartData<"pie">;
}

const PieChartSub = ({ chartData }: PieChartProps) => {
  return (
    <div className="chart-container h-96 w-full">
      <div className="h-full">
        <Pie
          data={chartData}
          options={{
            plugins: {
              title: {
                display: true,
                text: "Users Gained between 2016-2020",
              },
            },
            maintainAspectRatio: false,
          }}
        />
      </div>
    </div>
  );
};

const PieChart = () => {
  // Define chartData as a constant instead of state
  const chartData = {
    labels: data.map((item) => item.year.toString()), // Convert years to strings for labels
    datasets: [
      {
        label: "Users Gained",
        data: data.map((item) => item.userGain),
        backgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#4BC0C0",
          "#9966FF",
        ], // Colors for each segment
        hoverBackgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#4BC0C0",
          "#9966FF",
        ],
      },
    ],
  };

  return (
    <div className="w-full py-8 flex flex-col justify-center items-center">
      <h2 className="text-center text-xl font-bold mb-6">
        Pie Chart - User Growth Chart
      </h2>
      <div className="w-full max-w-2xl mx-auto">
        <PieChartSub chartData={chartData} />
      </div>
    </div>
  );
};

export default PieChart;
