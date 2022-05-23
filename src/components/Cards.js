import React from "react";

import swimmer from "../img/swimmer.png";
import wedding from "../img/wedding.png";
import bycicle from "../img/bycicle.png";
import star from "../img/star.png";

export default function Cards() {
  return (
    <div className="cards">
      <div className="card">
        <div className="card__status">sold out</div>
        <div className="card__img">
          <img src={swimmer} alt="a swimmer" />
        </div>
        <img src={star} className="card__rating__star" alt="a start icon" />
        <p className="card__rating">
          5.0
          <span>(6)•USA</span>
        </p>
        <p className="card__subject">Life lessons with Katie Zaferes</p>
        <p className="card__price">
          <span>From $136</span>/ person
        </p>
      </div>
      <div className="card">
        <div className="card__status">online</div>
        <div className="card__img">
          <img src={wedding} alt="a bride" />
        </div>
        <img src={star} className="card__rating__star" alt="a start icon" />
        <p className="card__rating">
          5.0
          <span>(30)•USA</span>
        </p>
        <p className="card__subject">Learn wedding photography</p>
        <p className="card__price">
          <span>From $125</span>/ person
        </p>
      </div>
      <div className="card">
        <div className="card__img">
          <img src={bycicle} alt="a bycicle" />
        </div>
        <img src={star} className="card__rating__star" alt="a start icon" />
        <p className="card__rating">
          4.8
          <span>(2)•USA</span>
        </p>
        <p className="card__subject">Group Mountain Biking</p>
        <p className="card__price">
          <span>From $50</span>/ person
        </p>
      </div>
    </div>
  );
}
