import React from "react";
import "./Footer.scss";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";
import logoWhite from "../../assets/logo/logo-white.svg";

function Footer() {
  return (
    <>
      <div className="footer-top"></div>
      <div className="footer-mid"></div>
      <div className="footer">
        <div className="footer__logo">
          <img className="footer__img" src={logoWhite} alt="logo" />
        </div>
        <div className="footer__about">
          <p className="footer__about footer__about--txt">About</p>
          <p className="footer__about footer__about--txt">Privacy</p>
          <p className="footer__about footer__about--txt">Terms</p>
        </div>
        <div className="footer__contact">
          <p>Contact</p>
        </div>
        <div className="footer__socials">
          <FaInstagram />
          <FaFacebook />
          <FaTwitter />
        </div>
      </div>
    </>
  );
}

export default Footer;
