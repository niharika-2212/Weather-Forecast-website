import express from "express";
import "dotenv/config";
import cors from "cors";
import axios from "axios";
import nodemailer from "nodemailer";
import { Resend } from 'resend';

const app = express();
const port = process.env.PORT || 5000;

app.use(cors()); // Allow frontend to communicate with backend
app.use(express.json());

app.get("/weather", async (req, res) => {
  const { city } = req.query; // Get city name from frontend
  const API_KEY = process.env.API_KEY;
  if (!city) {
    return res.status(400).json({ error: "City name is required" });
  }

  try {
    const response = await axios.get(
      `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`
    );
    const weatherData = response.data;
    // console.log(response.data);

    res.json({
      name: weatherData.location.name,
      temperature: weatherData.current.temp_c, // Temperature in Celsius
      text: weatherData.current.condition.text, // Weather condition
      icon: weatherData.current.condition.icon, // Weather condition
      humidity: weatherData.current.humidity, // Humidity percentage
    });
  } catch (error) {
    console.error("Error fetching weather data:", error);
    res.status(500).json({ error: "Failed to fetch weather data" });
  }
});

function extractDayMonth(dateString) {
  const date = new Date(dateString);
  const day = date.getDate();
  const month = date.toLocaleString("default", { month: "short" }); // Or 'long' for full month name
  const newDate = day + " " + month;
  return newDate;
}

function extractTime(dateTimeString) {
  const time = dateTimeString.split(" ")[1];
}

app.get("/search", async (req, res) => {
  const { city } = req.query; // Get city name from frontend
  const API_KEY = process.env.API_KEY;
  if (!city) {
    return res.status(400).json({ error: "City name is required" });
  }

  try {
    const response1 = await axios.get(
      `http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${city}`
    );
    const weatherData = response1.data;
    const response2 = await axios.get(
      `http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${city}&days=7`
    );
    const dayWeather = response2.data;

    const days = dayWeather.forecast.forecastday;
    const returnData = [];
    days.forEach((element) => {
      const obj = {
        date: extractDayMonth(element.date),
        max: element.day.maxtemp_c,
        min: element.day.mintemp_c,
        icon: element.day.condition.icon,
      };
      returnData.push(obj);
    });

    const hour = weatherData.forecast.forecastday[0].hour;
    const timeobj = [];
    hour.forEach((element) => {
      const temp = {
        time: element.time.split(" ")[1],
        temp: element.temp_c,
      };
      timeobj.push(temp);
    });
    // console.log(timeobj);
    res.json({
      name: weatherData.location.name,
      temperature: weatherData.current.temp_c, // Temperature in Celsius
      text: weatherData.current.condition.text, // Weather condition
      icon: weatherData.current.condition.icon, // Weather condition
      humidity: weatherData.current.humidity, // Humidity percentage
      windSpeed: weatherData.current.wind_kph, // windspeed in kmph
      days: returnData,
      hourTime: timeobj,
    });
  } catch (error) {
    console.error("Error fetching weather data:", error);
    res.status(500).json({ error: "Failed to fetch weather data" });
  }
});

app.post("/send-email", async (req, res) => {
  const transporter = nodemailer.createTransport({
    service: "smtp.gmail.com",
    secure: true,
    port: 465,
    auth: {
      user: process.env.EMAIL,
      pass: process.env.EMAIL_PASS,
    },
    tls: {
      rejectUnauthorized: false, // Prevent SSL errors
    },
  });
  transporter.verify(function (error, success) {
    if (error) {
      console.log(error);
    } else {
      console.log("Server is ready to take our messages");
    }
  });
  
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
