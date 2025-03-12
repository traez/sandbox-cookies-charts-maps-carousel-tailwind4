import type { Metadata } from "next";
import Carousel from "@/components/Carousel";

export const metadata: Metadata = {
  title: "Carousel Sandbox",
  description: "Created by Trae Zeeofor",
};

const pageCarousel = () => {
  return (
    <>
      <Carousel />
    </>
  );
};

export default pageCarousel;
