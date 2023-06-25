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
import ChartAttendance from "./ChartAttendance";
import ChartInform from "./ChartInform";

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
        position: "bottom",
        title: {
          display: true,
          padding: 4,
        },
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
    <div className="flex-1 flex flex-col-reverse md-tablet:flex-row big-tablet:flex-col gap-10 desktop:gap-0 md-tablet:justify-between big-tablet:justify-center desktop:justify-between py-5">
      <ChartAttendance options={options} data={AttendanceData} />
      <ChartInform options={options} data={EmployeeInform} state={stateDataEmployee} />
    </div>
  );
}

export default Charts;
