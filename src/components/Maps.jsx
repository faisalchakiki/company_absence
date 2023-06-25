import "leaflet/dist/leaflet.css";

import L from "leaflet";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

import markers from "../data/markers.json";
import dataEmployee from "../data/dataEmployee.json";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import icon from "../assets/location-mark.png";
import { useContext } from "react";
import ContextEmployee from '../features/ContextEmployee'

function Maps() {
  const stateDataEmployee = useContext(ContextEmployee)

  const DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
  });

  L.Marker.prototype.options.icon = DefaultIcon;

  const setDataEmployee = (e) => {
    const latlng = JSON.stringify([e.latlng.lat, e.latlng.lng]);
    if (latlng === JSON.stringify(markers[0].geocode)) {
      stateDataEmployee.setValueEmployee(dataEmployee[0]);
    } else if (latlng === JSON.stringify(markers[1].geocode)) {
      stateDataEmployee.setValueEmployee(dataEmployee[1]);
    } else if (latlng === JSON.stringify(markers[2].geocode)) {
      stateDataEmployee.setValueEmployee(dataEmployee[2])
    } else {
      console.log("not match geo");
    }
  };

  return (
    <div className="w-[70%] bg-white">
      <MapContainer
        className="w-full h-[100%]"
        center={[-5.996444214929895, 106.5984735373413]}
        zoom={6}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {markers.map((marker, index) => (
          <Marker
            key={index}
            position={marker.geocode}
            eventHandlers={{ click: (e) => setDataEmployee(e) }}
          >
            <Popup>
              <h2 className="font-semibold">{marker.popUp}</h2>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}

export default Maps;
