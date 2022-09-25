import "./Hamburger.scss";
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

function Hamburger() {
  const { logout } = useAuth();
  const [error, setError] = useState("");
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  async function handleLogout() {
    setError("");

    try {
      await logout();
      navigate("/login");
    } catch {
      setError("Failed to Log Out");
    }
  }
  return (
    <nav className="header__nav">
      <ul className="header__list">
        <li>Rent Your Space</li>
        <li>Bookings</li>
      </ul>
      {error && <p>{error}</p>}
      <button onClick={handleLogout} className="header__btn">
        Log Out
      </button>
    </nav>
  );
}

export default Hamburger;
