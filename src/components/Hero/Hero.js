import React from "react";
import Guitarist from "../../assets/images/Guitarist-ben-collins-Fr2iwKpsi-Y-unsplash 1.png";
import "./Hero.scss";

function Hero() {
  return (
    <div className="hero">
      <div>
        <div className="hero__title">
          <h1 className="hero__title hero__title--tagline">
            book a studio online in minutes
          </h1>
        </div>
        <div className="hero__body">
          <p>
            Its hard enough getting the band on the same page, let alone book a
            space. We make it easier to find, preview and book a rehearsal space
            so you can focus on not forgetting your capo.
          </p>
        </div>
      </div>
      <div className="hero__image">
        <img className="hero__guitar" src={Guitarist} alt="guitar player" />
      </div>
    </div>
  );
}

export default Hero;
