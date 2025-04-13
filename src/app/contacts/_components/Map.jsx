"use client";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "../../../styles/pages/contacts.css";

const customIcon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
  iconSize: [30, 30],
  iconAnchor: [15, 30],
  popupAnchor: [0, -30],
});

export default function Map() {
  const markers = [
    {
      coords: [10.712438277476279, 122.56034164962979],
      popUp: "BINHI Facility, WVSU TBI",
    },
  ];

  return (
    <MapContainer center={markers[0].coords} zoom={18} className="leaflet-container">
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {markers.map((marker, index) => (
        <Marker key={index} position={marker.coords} icon={customIcon}>
          <Popup>
            <p className="font-bold text-primary text-sm">{marker.popUp}</p>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
