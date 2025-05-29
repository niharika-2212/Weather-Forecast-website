import { useState } from "react";
import "./NavBar.css"
import { IoMdSearch } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { fetchSearchWeather } from "../../api";

function NavBar() {
  const [name, setName] = useState(null);
  const navigate = useNavigate();
  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const value = await fetchSearchWeather(name);
      navigate("/search", { state: { data: value, error: null } });
    } catch (error) {
      const errorMessage = error.response?.data?.message || "City not found. Please try again.";
      navigate("/search", { state: { data: null, error:errorMessage } });
    }
  }
  function handleChange(event) {
    setName(event.target.value);
  }
  return (
    <div className="navbar">
      <h1 onClick={() => { navigate("/") }}>SkyCast</h1>
      <div className="search-box">
        <form onSubmit={handleSubmit} className="search-container">
          <input onChange={handleChange} type="text" placeholder="Search Location..." name="search" />
          <button type="submit" className="search-i">
            <IoMdSearch className="search-icon" />
          </button>
        </form>
      </div>
      <div className="navbar-right">
        <div onClick={() => { navigate("/") }}>Home</div>
        <div onClick={() => { navigate("/about") }}>About</div>
        <div onClick={() => { navigate("/contact") }}>Contact</div>
      </div>
    </div>
  );
}

export default NavBar;