import "leaflet/dist/leaflet.css"
import "leaflet/dist/images/marker-shadow.png";
import { Line, Bar } from "react-chartjs-2";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

import monthCharts from "../data/monthCharts.json";
import dataAttendance from "../data/dataAttendance.json";
import dataEmployee from "../data/dataEmployee.json";
import markers from "../data/markers.json";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);
ChartJS.defaults.color = "#fff";

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
  },
};

const AttendanceData = {
  labels: monthCharts,
  datasets: dataAttendance,
};

const EmployeeInform = {
  labels: monthCharts,
  datasets: dataEmployee,
};

function Homepage() {
  return (
    <div className="flex justify-between h-[100vh]">
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
      <div className="flex-1 flex flex-col justify-between py-5">
        <section className="h-[50%]">
          <div className="bg-skyblue px-3">
            <h1 className="text-[#e0e0e0] uppercase font-semibold text-center mb-4 bg-secondary tracking-wide">
              attendeance office history
            </h1>
          </div>
          <div className="px-5">
            <Line height={200} options={options} data={AttendanceData} />
          </div>
        </section>
        <section className="h-[50%]">
          <div className="bg-skyblue px-3">
            <h1 className="text-[#e0e0e0] uppercase font-semibold text-center mb-4 bg-secondary tracking-wide">
              employee information
            </h1>
          </div>
          <div className="px-5">
            <Bar height={200} options={options} data={EmployeeInform} />
          </div>
        </section>
      </div>
    </div>
  );
}

export default Homepage;
