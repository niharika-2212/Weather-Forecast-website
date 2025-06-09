import { useState } from "react";
import "./NavBar.css";
import { IoMdSearch } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { fetchSearchWeather } from "../../api";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

function NavBar() {
  const [name, setName] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const value = await fetchSearchWeather(name);
      navigate("/search", { state: { data: value, error: null } });
    } catch (error) {
      const errorMessage =
        error.response?.data?.message || "City not found. Please try again.";
      navigate("/search", { state: { data: null, error: errorMessage } });
    }
  }

  function handleChange(event) {
    setName(event.target.value);
  }

  function handleNavClick(path) {
    setMenuOpen(false);
    navigate(path);
  }

  return (
    <div className="navbar">
      <h1 onClick={() => navigate("/")}>SkyCast</h1>
      
      <div className="search-box">
        <form onSubmit={handleSubmit} className="search-container">
          <input
            onChange={handleChange}
            type="text"
            placeholder="Search Location..."
            name="search"
          />
          <button type="submit" className="search-i">
            <IoMdSearch className="search-icon" />
          </button>
        </form>
      </div>

      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <IoMdClose size={28} /> : <GiHamburgerMenu size={28} />}
      </div>

      <div className={`navbar-right ${menuOpen ? "open" : ""}`}>
        <div onClick={() => handleNavClick("/")}>Home</div>
        <div onClick={() => handleNavClick("/about")}>About</div>
        <div onClick={() => handleNavClick("/contact")}>Contact</div>
      </div>
    </div>
  );
}

export default NavBar;
