"use client";

import { MapContainer, TileLayer, Marker, Popup, Circle } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Custom map marker styled with Tailwind to match your site's aesthetic
const customPinIcon = L.divIcon({
  html: `<div class="w-6 h-6 bg-orange-600 rounded-full border-2 border-white shadow-[0_0_15px_rgba(234,88,12,0.5)] flex items-center justify-center relative">
           <div class="w-2 h-2 bg-white rounded-full"></div>
           <div class="absolute inset-0 bg-orange-500 rounded-full animate-ping opacity-50"></div>
         </div>`,
  className: "", // Clear default Leaflet styles so Tailwind classes work
  iconSize: [24, 24],
  iconAnchor: [12, 12],
});

export default function ServiceAreaMap() {
  // Center of Portlaoise
  const portlaoiseCoords: [number, number] = [53.0344, -7.2997];

  return (
    <div className="w-full h-full relative z-0">
      <MapContainer
        center={portlaoiseCoords}
        zoom={9} // Zoom level 10 perfectly frames Co. Laois and surrounding towns
        scrollWheelZoom={false}
        className="w-full h-full z-0"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {/* Highlights a ~25km radius covering Mountmellick, Portarlington, Abbeyleix, etc. */}
        <Circle
          center={portlaoiseCoords}
          radius={25000} // Radius in meters (25km)
          pathOptions={{
            color: "#ea580c", // handy-orange
            fillColor: "#ea580c",
            fillOpacity: 0.15, // Subtle fill so you can still read map labels
            weight: 2,
          }}
        />
      </MapContainer>
    </div>
  );
}
