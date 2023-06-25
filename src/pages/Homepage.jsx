import Maps from "../components/Maps";
import Charts from "../components/Charts";

function Homepage() {
  return (
    <div className="flex flex-col big-tablet:flex-row justify-between min-h-[100vh]">
      <Maps />
      <Charts />
    </div>
  );
}

export default Homepage;
