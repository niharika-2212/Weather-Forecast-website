import { FaCloud } from "react-icons/fa";
import { WiHumidity } from "react-icons/wi";
import { FaWind } from "react-icons/fa";
import DayCard from "./DayCard";
import "./Search.css";
import { useLocation } from "react-router-dom";
import TemperatureGraph from "./TemperatureGraph.jsx";
function Search() {
  const location = useLocation();
  const { data, error } = location.state || {};
  return (

    <div className="search">
      {error ? (<p style={{ color: "red" }}>Error: {error}</p>) : (<div className="main-card">
        <div className="top-card">
          <div className="left-card">
            <div className="result-location">{data.name}</div>
            <div className="result-summary">
              <img src={data.icon} className="cloud-icon" />
              <div>
                <div className="result-temp">{data.temperature}&deg;C</div>
                <div className="result-weather">{data.text}</div>
              </div>
            </div>
            <div className="info-line">
              <div className="info-box">
                <WiHumidity className="cloud-color" />
                <div>Humidity</div>
                <div className="value">{data.humidity}%</div>
              </div>
              <div className="info-box">
                <FaWind className="cloud-color" />
                <div>Wind Speed</div>
                <div className="value">{data.windSpeed} km/h</div>
              </div>
            </div>
          </div>
          <div className="right-card">
            <div className="hourly">Hourly forecast</div>
            <TemperatureGraph hourlyData={data.hourTime} />
          </div>
        </div>
        <div className="bottom-card">
          <div className="hourly">7 day forecast</div>
          <div className="days">
            {data.days != [] ? (data.days.map((item, index) => {
              return <DayCard key={index} date={item.date} max={item.max} min={item.min} icon={item.icon} />
            })) : null}
          </div>
        </div>
      </div>)}

    </div>
  );
}

export default Search;
