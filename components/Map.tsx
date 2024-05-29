"use client";

import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import { Popup } from "react-leaflet/Popup";
import { Marker } from "react-leaflet/Marker";
import { Users, getUsers } from "@/utils/apis";

const Map = () => {
  const [markers, setMarkers]= useState<Users[]>([])
  const [popups, setPopups] = useState<Users[]>([])

 async function fetchMarker() {
    try {
      const result = await getUsers()
      setMarkers(result.result)
    } catch (error: any) {
      console.error("Error fetching markers:", error);
    }
 }

 async function fetchPopup() {
    try {
      const result = await getUsers()
      setPopups(result.result)
    } catch (error: any) {
      console.error("Error fetching popupsL:", error)
    }
 }

  useEffect(() => {
    fetchMarker()
    fetchPopup()
  },[])

  return (
    <div id="map">
      <MapContainer
        center={[51.505, -0.09]}
        zoom={13}
        scrollWheelZoom={false}
        style={{height:'100vh', width:'150vh'}}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        // mapping marker
        {/* {markers.map((marker) => {          
          <Marker 
          key={marker.id} 
          position={marker.address.geo.lat, marker.address.geo.lng}
          />
        })} */}

        // mapping popup

        <Marker position={[51.505, -0.09]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;
