import { Line } from "react-chartjs-2"

function ChartAttendance({options, data}) {
  return (
    <section className="desktop:h-[50%]">
        <div className="bg-skyblue px-3">
          <h1 className="text-[#e0e0e0] uppercase font-semibold text-center mb-6 bg-secondary tracking-wide">
            attendance office history
          </h1>
        </div>
        <div className="px-5">
          <Line height={200} options={options} data={data} />
        </div>
      </section>
  )
}

export default ChartAttendance