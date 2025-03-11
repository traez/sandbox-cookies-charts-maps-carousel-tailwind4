import type { Metadata } from "next";
import LineChart from "@/components/LineChart";

export const metadata: Metadata = {
  title: "Line Chart Sandbox",
  description: "Created by Trae Zeeofor",
};

const pageLineChart = () => {
  return (
    <>
      <LineChart />
    </>
  );
};

export default pageLineChart;
