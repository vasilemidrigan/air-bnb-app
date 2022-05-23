import React from "react";

import heroImg from "../img/hero.png";

export default function Hero() {
  return (
    <div className="hero">
      <img src={heroImg} className="hero__img" alt="activities collage" />
      <h1 className="hero__header">Online Experiences</h1>
      <p className="hero__txt">
        Join unique interactive activities led by one-of-a-kind hosts—all
        without leaving home.
      </p>
    </div>
  );
}
