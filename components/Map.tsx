"use client";

import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import { Popup } from "react-leaflet/Popup";
import { Marker } from "react-leaflet/Marker";
import { Users } from "@/utils/apis";
import axiosWithConfig from "@/utils/axiosWithConfig";

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

  async function fetchPopup() {
    try {
      const response = await axiosWithConfig("/users");
      setPopups(response.data);
    } catch (error: any) {
      console.error("Error fetching popupsL:", error);
    }
  }

  useEffect(() => {
    fetchMarker();
    fetchPopup();
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
              marker.address.geo.lng,
              marker.address.geo.lat,
            ]}
          >
            {/* mapping popup */}
            {popups.map((popup) => (
              <Popup key={popup.id}>{popup.address.city}</Popup>
            ))}
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default Map;
