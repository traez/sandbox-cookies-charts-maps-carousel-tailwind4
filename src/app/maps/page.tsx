import type { Metadata } from "next";
import Maps from "@/components/Maps";

export const metadata: Metadata = {
  title: "Maps Sandbox",
  description: "Created by Trae Zeeofor",
};

const pageMaps = () => {
   return (
     <>
       <Maps />
     </>
   );
};

export default pageMaps;
