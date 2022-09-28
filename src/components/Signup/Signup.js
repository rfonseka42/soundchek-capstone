import React, { useRef, useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import logoWhite from "../../assets/logo/logo-white.svg";
import { Link, useNavigate } from "react-router-dom";
import television from "../../assets/images/tv.jpg";
import "./Signup.scss";

function Signup() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }

    try {
      setError("");
      setLoading(true);
      navigate("/login");

      await signup(emailRef.current.value, passwordRef.current.value);
    } catch {
      setError("Could not create and account, try again");
    }

    setLoading(false);
  }

  return (
    <div className="wrapper">
      <div className="wrapper__img">
        <img src={television} alt="televisions" />
      </div>
      <div className="wrapper__one"></div>
      <div className="wrapper__two"></div>
      <div className="auth">
        <img className="auth-logo" src={logoWhite} alt="logo-white" />
        <h1 className="auth__title">HEY, COUNT ME IN</h1>
        <div className="auth__sign-in">
          <p className="auth__sign-in--tag">
            Already have an account?{" "}
            <Link className="auth__sign-in--login" to="/login">
              Log In
            </Link>
          </p>
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
          <input
            className="sign-up__field"
            type="password"
            placeholder="Confirm Password"
            ref={passwordConfirmRef}
            required
          ></input>
          <button disabled={loading} className="sign-up__btn" type="submit">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
