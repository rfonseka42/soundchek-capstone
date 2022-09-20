import "./Header.scss";
import { useAuth } from "../../contexts/AuthContext";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

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
    <div>
      Header
      {error && <p>{error}</p>}
      <button onClick={handleLogout}>Log Out</button>
    </div>
  );
}

export default Header;
