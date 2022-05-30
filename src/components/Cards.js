import React from "react";

import star from "../img/star.png";

export default function Cards(props) {
  return (
    <div className="cards">
      <div className="card">
        <div className="card__status">sold out</div>
        <div className="card__img">
          <img src={require(`../img/${props.img}`)} alt="" />
        </div>
        <img src={star} className="card__rating__star" alt="a start icon" />
        <p className="card__rating">
          {props.rating}
          <span>({props.reviewCount})•USA</span>
        </p>
        <p className="card__subject">{props.title}</p>
        <p className="card__price">
          <span>From ${props.price}</span>/ person
        </p>
      </div>
    </div>
  );
}
