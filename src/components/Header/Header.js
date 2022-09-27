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
      <Link className="header__logo-link" to={"/"}>
        <img className="header__logo" src={OrangeLogo} alt="orange-logo" />
      </Link>

      <nav className="header__nav">
        <ul className="header__list">
          <Link className="header__link" to="/rentYourSpace">
            <li>Rent Your Space</li>
          </Link>
          <Link to="/yourReservation/:id" className="header__link">
            <li>Bookings</li>
          </Link>
        </ul>
        {error && <p>{error}</p>}
        <button onClick={handleLogout} className="header__btn">
          Log Out
        </button>
      </nav>
    </div>
  );

  //   <header className="header">
  //     <div>
  //       <img className="header__logo" src={OrangeLogo} alt="orange-logo" />
  //     </div>

  //     <div className="header__navigation">
  //       <h4>About</h4>
  //       <h4>Contact</h4>
  //       <h4>Rent Your Space</h4>
  //     </div>
  //     <div className="dropdown">
  //       <div
  //         className="dropdown__trigger"
  //         onClick={() => {
  //           setOpen(!open);
  //         }}
  //       >
  //         <FaSkull className="dropdown__skull" />
  //       </div>

  //       <div className={`dropdown-menu ${open ? "active" : "inactive"}`}>
  //         <ul>
  //           <li className="dropdown-menu__list">Profile</li>
  //           <li className="dropdown-menu__list">Account Settings</li>
  //         </ul>
  //         {error && <p>{error}</p>}
  //         <button onClick={handleLogout}>Log Out</button>
  //       </div>
  //     </div>
  //   </header>
  // );
}

export default Header;
