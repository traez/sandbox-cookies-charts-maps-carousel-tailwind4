"use client";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

// Define a type for our location
interface Location {
  id: number;
  name: string;
  position: [number, number]; // [latitude, longitude]
  description: string;
}

// Sample location
const sampleLocation: Location = {
  id: 1,
  name: "Enugu Street, Garki 2, Abuja",
  position: [9.02292, 7.4876], // Latitude and Longitude for Enugu Street, Garki 2, Abuja
  description: "A notable street in the Garki 2 district of Abuja, Nigeria",
};

// Create a dynamic Map component with no SSR
const MapWithNoSSR = dynamic(() => import("./MapComponents"), { ssr: false });

export default function Maps() {
  // State to track if component is mounted (client-side)
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Set mounted to true when component mounts on client
    setMounted(true);
  }, []);

  return (
    <section className="flex h-full flex-col items-center p-4">
      <h1 className="text-2xl font-bold mb-4">
        Simple OpenStreetMap with Leaflet
      </h1>

      {/* Map container with fixed height and full width */}
      <div className="w-full h-[500px] rounded-lg overflow-hidden border border-gray-300">
        {mounted ? (
          <MapWithNoSSR
            center={sampleLocation.position}
            zoom={13}
            location={sampleLocation}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gray-100">
            Loading map...
          </div>
        )}
      </div>
    </section>
  );
}
