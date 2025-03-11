"use client";
import { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Define prop types
interface Location {
  id: number;
  name: string;
  position: [number, number]; // [latitude, longitude]
  description: string;
}

interface MapProps {
  center: [number, number];
  zoom: number;
  location: Location;
}

// This component will update the map view when the center changes
function ChangeView({
  center,
  zoom,
}: {
  center: [number, number];
  zoom: number;
}) {
  const map = useMap();
  useEffect(() => {
    map.setView(center, zoom);
  }, [center, zoom, map]);
  return null;
}

export default function MapComponents({ center, zoom, location }: MapProps) {
  useEffect(() => {
    // Fix for default marker icons in Leaflet with Next.js
    // Use a safer approach for icon configuration
    L.Icon.Default.mergeOptions({
      iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
      iconRetinaUrl:
        "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
      shadowUrl:
        "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
    });
  }, []);

  return (
    <MapContainer
      center={center}
      zoom={zoom}
      scrollWheelZoom={true}
      style={{ height: "100%", width: "100%" }}
      className="z-0"
    >
      <ChangeView center={center} zoom={zoom} />
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={location.position}>
        <Popup>
          <div>
            <h3 className="font-bold">{location.name}</h3>
            <p>{location.description}</p>
          </div>
        </Popup>
      </Marker>
    </MapContainer>
  );
}
