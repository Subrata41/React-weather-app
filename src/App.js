import "./App.css";
import WeekInfoCardComponents from "./Components/WeekInfoCard";
import ChooseStateComponents from "./Components/ChooseState";
import HumidityComponents from "./Components/Humidity";
import LeftComponents from "./Components/Left";

function App() {
  return (
    <div className="App">
      <div className="homeWrap">
        <div className="weatherSection">
          <LeftComponents />
          <div className="rightSide">
            <ChooseStateComponents />
            <WeekInfoCardComponents />
            <HumidityComponents />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
