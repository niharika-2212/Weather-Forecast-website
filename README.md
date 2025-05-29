# Weather Forecase Website
A modern, fullstack weather forecast web application that provides real-time weather data using the WeatherAPI.com service. Users can search for weather updates by city name and receive detailed current weather conditions and forecasts.

## Features
- Search weather by city
- Get current temperature, humidity, wind speed, and more
- Forecast charts and data for the week
- Fast, real time API integration

## Tech Stack
### Frontend 
- ReactJS
- CSS
- Axios

### Backend
- Node.js
- Express.js
- dotenv

## Installation
1. Clone the repository
```
git clone "https://github.com/niharika-2212/Weather-Forecast-website.git"
cd <folder-name>
```
2. Install dependencies
```
cd backend
npm install

cd frontend
npm install
```
3. Setup environment variables: create .env file in backend/src folder
```
API_KEY = your_api_key
port = your_port_number
```
4. Run the application
```
cd frontend
npm run dev

cd backend/src
node server.js
```
Open your browser and go to: http://localhost:5173

## Acknowledgements
Thanks to [WeatherAPI.com](https://www.weatherapi.com/) for providing free weather data.
