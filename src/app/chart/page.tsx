import type { Metadata } from "next";
import Chart from "@/components/Chart";

export const metadata: Metadata = {
  title: "Chart Sandbox",
  description: "Created by Trae Zeeofor",
};

const page = () => {
 return (
   <>
     <Chart />
   </>
 );
};

export default page;
