import "./Header.scss";
import { useAuth } from "../../contexts/AuthContext";
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import OrangeLogo from "../../assets/logo/logo-orange.svg";

function Header() {
  const { logout } = useAuth();
  const [error, setError] = useState("");

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
    <div className="header">
      <div className="header__logo">
        <Link className="header__logo-link" to={"/"}>
          <img
            className="header__logo-img"
            src={OrangeLogo}
            alt="orange-logo"
          />
        </Link>
      </div>

      <nav className="header__nav">
        <div className="header__list">
          <Link className="header__link" to="/rentYourSpace">
            Rent Your Space
          </Link>
          <Link to="/yourReservation/:id" className="header__link">
            Bookings
          </Link>
        </div>
      </nav>

      <div className="header__logout">
        {error && <p>{error}</p>}
        <button onClick={handleLogout} className="header__btn">
          Log Out
        </button>
      </div>
    </div>
  );
}

export default Header;
