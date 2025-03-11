"use client";
import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { Suspense } from "react";

// Fix for default marker icons in Leaflet with Next.js
const DefaultIcon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

// Set the default icon for all markers
L.Marker.prototype.options.icon = DefaultIcon;

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

// This component will update the map view when the center changes
function ChangeView({
  center,
  zoom,
}: {
  center: [number, number];
  zoom: number;
}) {
  const map = useMap();
  map.setView(center, zoom);
  return null;
}

export default function Maps() {
  // State to track if component is mounted (client-side)
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Set mounted to true when component mounts on client
    setMounted(true);
  }, []);

  // Don't render anything until mounted on client
  if (!mounted) return null;

  return (
    <section className="flex h-full flex-col items-center p-4">
      <h1 className="text-2xl font-bold mb-4">
        Simple OpenStreetMap with Leaflet
      </h1>

      {/* Map container with fixed height and full width */}
      <div className="w-full h-[500px] rounded-lg overflow-hidden border border-gray-300">
        <Suspense
          fallback={
            <div className="w-full h-full flex items-center justify-center bg-gray-100">
              Loading map...
            </div>
          }
        >
          <MapContainer
            // Center coordinates [latitude, longitude]
            center={sampleLocation.position}
            // Initial zoom level
            zoom={13}
            // Enable scroll wheel zoom
            scrollWheelZoom={true}
            // Style the container to fill its parent
            style={{ height: "100%", width: "100%" }}
            // Additional Tailwind classes
            className="z-0"
          >
            <ChangeView center={sampleLocation.position} zoom={13} />
            {/* TileLayer provides the map imagery from OpenStreetMap */}
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {/* Add a marker at our sample location */}
            <Marker position={sampleLocation.position}>
              {/* Popup appears when marker is clicked */}
              <Popup>
                <div>
                  <h3 className="font-bold">{sampleLocation.name}</h3>
                  <p>{sampleLocation.description}</p>
                </div>
              </Popup>
            </Marker>
          </MapContainer>
        </Suspense>
      </div>
    </section>
  );
}
