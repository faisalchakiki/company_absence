import { Bar } from "react-chartjs-2";

function ChartInform({ options, data, state }) {
  return (
    <section className="desktop:h-[50%]">
      <div className="bg-skyblue px-3">
        <h1 className="text-[#e0e0e0] uppercase font-semibold text-center mb-6 bg-secondary tracking-wide">
          employee information
        </h1>
      </div>
      <p className="mb-2 font-semibold border w-fit mx-auto text-[13px] py-1 px-3 rounded-md">
        {state.valueEmployee.city}
      </p>
      <div className="px-5">
        <Bar height={200} options={options} data={data} />
      </div>
    </section>
  );
}

export default ChartInform;
