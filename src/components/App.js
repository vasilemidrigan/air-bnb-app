import React from "react";

import Nav from "./Nav";
import Hero from "./Hero";
import Cards from "./Cards";

import data from "../data";

const cards = data.map((el) => {
  return (
    <Cards
      img={el.coverImg}
      rating={el.stats.rating}
      reviewCount={el.stats.reviewCount}
      location={el.country}
      title={el.title}
      price={el.price}
    />
  );
});

export default function App() {
  return (
    <div className="app">
      <Nav />
      <Hero />
      {cards}
    </div>
  );
}
