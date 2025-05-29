import { IoLocationSharp } from "react-icons/io5";
import "./Home.css";
import React , { useEffect, useState } from "react";
import Popular from "./Popular";
import fetchWeather from "../../api";

function Home() {
  const [delhiWeather, setDelhiWeather] = useState(null);
  const [popularCities, setPopularCities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    
    const fetchAllWeather = async () => {
      setLoading(true);
      try {
        const delhi = await fetchWeather("New delhi")
        const mumbaiWeather = await fetchWeather("mumbai");
        const bangaloreWeather = await fetchWeather("bangalore");
        const kolkataWeather = await fetchWeather("kolkata");
        const chennaiWeather = await fetchWeather("chennai");
        const agraWeather = await fetchWeather("agra");
        setDelhiWeather(delhi);

        setPopularCities([
          mumbaiWeather, bangaloreWeather, kolkataWeather, chennaiWeather, agraWeather
        ]);
      } catch (err) {
        setError("Failed to fetch weather data");
      } finally {
        setLoading(false)
      }
    }

    fetchAllWeather();
  }, []);

  return (
    <div className="home">
      {loading ? (<p>Loading...</p>) : null}
      {error ? (<p style={{ color: "red" }}>{error}</p>) : null}


      {delhiWeather ? (<div className="default-location"><div className="left">
        <div className="first">
          <IoLocationSharp className="location-icon" />
          <div className="location-name">New delhi</div>
        </div><div className="second">
          <div className="temperature">{delhiWeather.temperature}&deg;C</div>
          <div>
            <div className="weather-heading">{delhiWeather.text}</div>
            <div className="weather-text">Humidity:{delhiWeather.humidity}%</div>
          </div>
        </div></div>
        <img src={delhiWeather.icon} className="sun-icon"/>
      </div>) : null}



      <div className="top-5">
        <div className="heading">Popular cities</div>
        <div className="city-cards">
          {/* <Popular /> */}

          {popularCities!=[] ? ( popularCities.map((item,index) => {
            return <Popular key={index} city={item.name} temperature={item.temperature} text={item.text} icon={item.icon} />
          })): null}
          
        </div>
      </div>
    </div>
  );
}

export default Home;
