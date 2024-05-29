"use client";

import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import { Popup } from "react-leaflet/Popup";
import { Marker } from "react-leaflet/Marker";
import { Users } from "@/utils/apis";
import axiosWithConfig from "@/utils/axiosWithConfig";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css"; // Re-uses images from ~leaflet package
import "leaflet-defaulticon-compatibility";

const Map = () => {
  const [markers, setMarkers] = useState<Users[]>([]);
  const [popups, setPopups] = useState<Users[]>([]);

  async function fetchMarker() {
    try {
      const response = await axiosWithConfig("/users");
      setMarkers(response.data);
    } catch (error: any) {
      console.error("Error fetching markers:", error);
    }
  }

  useEffect(() => {
    fetchMarker();
  }, []);

  return (
    <div id="map">
      <MapContainer
        center={[51.505, -0.09]}
        zoom={5}
        scrollWheelZoom={false}
        zoomControl={true}
        style={{ height: "50vh", width: "150vh" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {/* mapping marker */}
        {markers.map((marker) => (
          <Marker
            key={marker.id}
            position={[
              marker.address.geo.lat,
              marker.address.geo.lng,
            ]}
          >
            {/* mapping popup */}

            <Popup>{marker.address.city}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default Map;
