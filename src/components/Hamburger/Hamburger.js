import "./Hamburger.scss";
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { TbMenu2 } from "react-icons/tb";

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
    <nav className="hamburger">
      <TbMenu2
        className="hamburger__icon"
        size="30px"
        onClick={() => setOpen(!open)}
      />

      {open && (
        <ul className="hamburger__list">
          <Link className="hamburger__link" to="/rentYourSpace">
            <li>Rent Your Space</li>
          </Link>
          <Link to="/yourReservation/:id" className="hamburger__book">
            <li>Bookings</li>
          </Link>
        </ul>
      )}
      {error && <p>{error}</p>}
      <button onClick={handleLogout} className="hamburger__btn">
        Log Out
      </button>
    </nav>
  );
}

export default Hamburger;
