import "leaflet/dist/leaflet.css"

import L from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

import markers from "../data/markers.json";
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import icon from '../assets/location-mark.png';

const DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow
});
L.Marker.prototype.options.icon = DefaultIcon;

function Maps() {
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
          {
            markers.map((marker,index) => (
              <Marker key={index} position={marker.geocode}>
                <Popup>
                  <h2 className="font-semibold">{marker.popUp}</h2>
                </Popup>
              </Marker>
            ))
          }
        </MapContainer>
      </div>
  )
}

export default Maps