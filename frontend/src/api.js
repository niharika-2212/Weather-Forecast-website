import axios from "axios";

const fetchWeather = async (city) => {
  try {
    const response = await axios.get(`http://localhost:5000/weather?city=${city}`);
    return response.data;
  } catch (err) {
    // setError("Failed to fetch weather data");
    return err;
  }
};

const fetchSearchWeather = async (city) => {
  try {
    const response = await axios.get(`http://localhost:5000/search?city=${city}`);
    return response.data;
  } catch (err) {
    // setError("Failed to fetch weather data");
    return err;
  }
};

export default fetchWeather;
export  {fetchSearchWeather};