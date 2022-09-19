import React, { useRef, useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import logoWhite from "../../assets/logo/logo-white.svg";
import { Link, useNavigate } from "react-router-dom";
import "./Login.scss";

function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      setError("");
      setLoading(true);

      await login(emailRef.current.value, passwordRef.current.value);
      navigate("/");
    } catch {
      setError("Could not login, try again");
    }

    setLoading(false);
  }

  return (
    <div className="auth">
      <img className="auth-logo" src={logoWhite} alt="logo-white" />
      <h1 className="auth__title">HEY, COUNT ME IN</h1>
      <div className="auth__sign-in">
        <Link to="/signup" className="auth__sign-in--tag">
          Click to Sign Up
        </Link>
      </div>

      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit} className="sign-up">
        <input
          className="sign-up__field"
          type="email"
          placeholder="Email"
          ref={emailRef}
          required
        ></input>
        <input
          className="sign-up__field"
          type="password"
          placeholder="Password"
          ref={passwordRef}
          required
        ></input>
        <button disabled={loading} className="sign-up__btn" type="submit">
          Log In
        </button>
      </form>
    </div>
  );
}

export default Login;
