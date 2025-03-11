"use client";
import { data } from "@/lib/data";
import { Line } from "react-chartjs-2";
import { ChartData } from "chart.js/auto"; // TypeScript types
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register Chart.js components for Tree-Shaking
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface LineChartProps {
  chartData: ChartData<"line">;
}

const LineChartSub = ({ chartData }: LineChartProps) => {
  return (
    <div className="chart-container h-96 w-full">
      <div className="h-full">
        <Line
          data={chartData}
          options={{
            plugins: {
              title: {
                display: true,
                text: "Users Gained vs Lost between 2016-2020",
              },
              legend: {
                display: true,
                position: "top",
              },
            },
            maintainAspectRatio: false,
            scales: {
              y: {
                beginAtZero: true,
              },
            },
          }}
        />
      </div>
    </div>
  );
};

const LineChart = () => {
  // Define chartData as a constant
  const chartData = {
    labels: data.map((item) => item.year.toString()),
    datasets: [
      {
        label: "Users Gained",
        data: data.map((item) => item.userGain),
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        borderColor: "#36A2EB",
        borderWidth: 2,
        tension: 0.1,
        pointBackgroundColor: "#36A2EB",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "#36A2EB",
      },
      {
        label: "Users Lost",
        data: data.map((item) => item.userLost),
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "#FF6384",
        borderWidth: 2,
        tension: 0.1,
        pointBackgroundColor: "#FF6384",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "#FF6384",
      },
    ],
  };

  return (
    <div className="w-full py-4 flex flex-col justify-center items-center">
      <h2 className="text-center text-xl font-bold mb-6">
        Line Chart - User Metrics Trends
      </h2>
      <div className="w-full max-w-2xl mx-auto">
        <LineChartSub chartData={chartData} />
      </div>
    </div>
  );
};

export default LineChart;
