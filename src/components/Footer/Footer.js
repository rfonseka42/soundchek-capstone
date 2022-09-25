import React from "react";
import "./Footer.scss";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";
import logoWhite from "../../assets/logo/logo-white.svg";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <div className="footer-top"></div>
      <div className="footer-mid"></div>
      <div className="footer">
        <Link to="/">
          <div className="footer__logo">
            <img className="footer__img" src={logoWhite} alt="logo" />
          </div>
        </Link>
        <div className="footer__about">
          <p className="footer__about footer__about--txt">About</p>
          <p className="footer__about footer__about--txt">Privacy</p>
          <p className="footer__about footer__about--txt">Terms</p>
        </div>
        <div className="footer__contact">
          <p>Contact</p>
        </div>
        <div className="footer__socials">
          <a
            href="https://www.instagram.com/"
            className="footer__socials--link"
          >
            <FaInstagram />
          </a>
          <a href="https://www.facebook.com/" className="footer__socials--link">
            <FaFacebook />
          </a>
          <a href="https://twitter.com/home" className="footer__socials--link">
            <FaTwitter />
          </a>
        </div>
      </div>
    </>
  );
}

export default Footer;
