"use client";
import { useEffect, useState } from "react";
import "@/lib/chartConfig"; 
import { data } from "@/lib/data";
import { Bar } from "react-chartjs-2";
import { ChartData } from "chart.js/auto"; // TypeScript types

interface BarChartProps {
  chartData: ChartData<"bar">;
}

const BarChartSub = ({ chartData }: BarChartProps) => {
  return (
    <div className="chart-container h-96 w-full">
      <div className="h-full">
        <Bar
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

const BarChart = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Define chartData as a constant
  const chartData = {
    labels: data.map((item) => item.year.toString()),
    datasets: [
      {
        label: "Users Gained",
        data: data.map((item) => item.userGain),
        backgroundColor: "#36A2EB",
        borderColor: "#2993DB",
        borderWidth: 1,
      },
      {
        label: "Users Lost",
        data: data.map((item) => item.userLost),
        backgroundColor: "#FF6384",
        borderColor: "#E95375",
        borderWidth: 1,
      },
    ],
  };

  if (!mounted) {
    return (
      <div className="h-96 w-full flex items-center justify-center">
        Loading chart...
      </div>
    );
  }

  return (
    <div className="w-full py-4 flex flex-col justify-center items-center">
      <h2 className="text-center text-xl font-bold mb-6">
        Bar Chart - User Metrics Comparison
      </h2>
      <div className="w-full max-w-2xl mx-auto">
        <BarChartSub chartData={chartData} />
      </div>
    </div>
  );
};

export default BarChart;
