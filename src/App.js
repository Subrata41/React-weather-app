import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import "./App.css";

function App() {
  const apiKey = "eee1b3a61621040851cabf24353b6f3a";
  const [inputCity, setInputCity] = useState("");
  const [data, setData] = useState({});

  const getWetherDetails = (cityName) => {
    if (!cityName) return;
    const apiURL =
      "https://api.openweathermap.org/data/2.5/weather?q=" +
      cityName +
      "&appid=" +
      apiKey;
    axios
      .get(apiURL)
      .then((res) => {
        console.log("response", res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  const handleChangeInput = (e) => {
    console.log("value", e.target.value);
    setInputCity(e.target.value);
  };

  const handleSearch = () => {
    getWetherDetails(inputCity);
  };

  return (
    <div className="col-md-12">
      <div className="weather-background">
        <h1 className="heading">Weather App</h1>

        <div className="d-grid gap-3 col-4 mt-4">
          <input
            type="text"
            className="form-control"
            value={inputCity}
            onChange={handleChangeInput}
          />
          <button
            className="btn btn-success"
            type="button"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
      </div>

      {Object.keys(data).length > 0 && (
        <div className="col-md-12 text-center mt-5">
          <div className="shadow rounded weather-result">
            <img
              className="weather-icon"
              src="https://cdn-icons-png.flaticon.com/128/1163/1163763.png" alt=""
            />

            <h5 className="weather-city">{data?.name}</h5>
            <h6 className="weather-temp">
              {(data?.main?.temp - 273.15).toFixed(2)}°C
            </h6>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
