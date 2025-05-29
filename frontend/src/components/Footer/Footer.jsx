import "./Footer.css";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Footer() {
  const navigate = useNavigate();
  return (
    <div className="main-container">
      <div>
        <div className="headings">Quick Links</div>
        <div className="text links" onClick={() => { navigate("/") }}>Home</div>
        <div className="text links" onClick={() => { navigate("/about") }}>About</div>
        <div className="text links" onClick={() => { navigate("/contact") }}>Contact</div>
      </div>
      <div>
        <div className="headings">Contact Info</div>
        <div className="text">Email: <a className="link" href="mailto:niharikamanhar476@gmail.com" >niharikamanhar476@gmail.com</a></div>
        <div className="icons-main">
          <a className="link" href="https://github.com/niharika-2212" target="_blank"><FaGithub className="icon-footer" /></a>
          <a className="link" href="https://www.linkedin.com/in/niharika-manhar/" target="_blank"><FaLinkedin className="icon-footer" /></a></div>
      </div>
      <div>
        <div className="headings">Credits</div>
        <div className="text">Powered by <a href="https://www.weatherapi.com/" className="credit" title="Free Weather API" target="_blank">WeatherAPI.com</a></div>
        <div className="copyright">&copy; 2025 Niharika Manhar. All rights reserved</div>
      </div>
    </div>
  )
}

export default Footer;