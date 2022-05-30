import React from "react";

import star from "../img/star.png";

export default function Card(props) {
  let badge;
  console.log(props.location);
  if (props.openSpots === 0) {
    badge = "SOLD OUT";
  } else if (props.location === "Online") {
    badge = "ONLINE";
  }
  return (
    <div className="card">
      {badge && <div className="badge">{badge}</div>}
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
  );
}
