import { Line, Bar } from "react-chartjs-2";
import monthCharts from "../data/monthCharts.json";
import dataAttendance from "../data/dataAttendance.json";
import { useContext } from "react";
import ContextEmployee from "../features/ContextEmployee.js";

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

function Charts() {
  const stateDataEmployee = useContext(ContextEmployee);

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
    datasets: stateDataEmployee.valueEmployee.data,
  };

  return (
    <div className="flex-1 flex flex-col justify-between py-5">
      <section className="h-[50%]">
        <div className="bg-skyblue px-3">
          <h1 className="text-[#e0e0e0] uppercase font-semibold text-center mb-4 bg-secondary tracking-wide">
            attendance office history
          </h1>
        </div>
        <div className="px-5">
          <Line height={200} options={options} data={AttendanceData} />
        </div>
      </section>
      <section className="h-[50%]">
        <div className="bg-skyblue px-3">
          <h1 className="text-[#e0e0e0] uppercase font-semibold text-center mb-2 bg-secondary tracking-wide">
            employee information
          </h1>
        </div>
        <p className="mb-2 font-semibold border w-fit mx-auto text-[13px] py-1 px-3 rounded-md">{stateDataEmployee.valueEmployee.city}</p>
        <div className="px-5">
          <Bar height={200} options={options} data={EmployeeInform} />
        </div>
      </section>
    </div>
  );
}

export default Charts;
