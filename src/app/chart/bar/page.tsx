import type { Metadata } from "next";
import BarChart from "@/components/BarChart";

export const metadata: Metadata = {
  title: "Bar Chart Sandbox",
  description: "Created by Trae Zeeofor",
};

const pageBarChart = () => {
  return (
    <>
      <BarChart />
    </>
  );
};

export default pageBarChart;
