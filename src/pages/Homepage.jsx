import Maps from "../components/Maps";
import Charts from "../components/Charts";

function Homepage() {
  return (
    <div className="flex justify-between h-[100vh]">
      <Maps />
      <Charts />
    </div>
  );
}

export default Homepage;
