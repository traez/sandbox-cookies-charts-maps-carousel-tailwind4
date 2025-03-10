import type { Metadata } from "next";
import JsCookie from "@/components/JsCookie";

export const metadata: Metadata = {
  title: "JsCookie Sandbox",
  description: "Created by Trae Zeeofor",
};

const jscookiePage = () => {
  return (
    <>
      <JsCookie />
    </>
  );
};

export default jscookiePage;
