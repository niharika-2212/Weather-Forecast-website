import "./About.css";
import { IoLocationSharp } from "react-icons/io5";
import { FaDatabase } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function About() {
  const navigate = useNavigate();
  return (
    <div className="about">
      <div className="one">
        <div className="title">Welcome to Skycast</div>
        <div className="subtitle">
          Your go to platform for real time weather update
        </div>
        <button className="get-started" onClick={() => { navigate("/") }}>Get started</button>
      </div>
      <div className="two">
        <div className="about-card">
          <IoLocationSharp className="about-icons" />
          <div className="about-heading">Global coverage</div>
          <div className="about-text">
            Check forecasts for any location worldwide in an easy-to-use
            interface.
          </div>
        </div>
        <div className="about-card">
          <FaCheckCircle className="about-icons" />
          <div className="about-heading">Accurate Data</div>
          <div className="about-text">We provide accurate weather data using reliable resources.</div>
        </div>
        <div className="about-card">
          <FaDatabase className="about-icons" />
          <div className="about-heading">Trusted Data Sources</div>
          <div className="about-text">We have used OpenWeather API for data.</div>
        </div>
      </div>
    </div>
  );
}

export default About;
