import type { Metadata } from "next";
import PieChart from "@/components/PieChart";

export const metadata: Metadata = {
  title: "Pie Chart Sandbox",
  description: "Created by Trae Zeeofor",
};

const pagePieChart = () => {
  return (
    <>
      <PieChart />
    </>
  );
};

export default pagePieChart;

