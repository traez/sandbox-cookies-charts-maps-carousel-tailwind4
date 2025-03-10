"use client";
import { data } from "@/lib/data";
import { Pie } from "react-chartjs-2";
import { ChartData } from "chart.js/auto"; //TypeScript types
import {
  Chart as ChartJS,
  CategoryScale,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";

// Register Chart.js components for Tree-Shaking
ChartJS.register(CategoryScale, Title, Tooltip, Legend, ArcElement);

interface PieChartProps {
  chartData: ChartData<"pie">;
}

const PieChart = ({ chartData }: PieChartProps) => {
  return (
    <div className="chart-container h-96 w-full">
      <h2 className="text-center mb-4">Pie Chart</h2>
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

const Chart = () => {
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
      <h2 className="text-center text-xl font-bold mb-6">User Growth Chart</h2>
      <div className="w-full max-w-2xl mx-auto">
        <PieChart chartData={chartData} />
      </div>
    </div>
  );
};

export default Chart;
