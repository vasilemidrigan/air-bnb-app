import React from "react";

import Nav from "./Nav";
import Hero from "./Hero";
import Cards from "./Cards";

import swimmer from "../img/swimmer.png";
import bycicle from "../img/bycicle.png";

export default function App() {
  return (
    <div className="app">
      <Nav />
      <Hero />
      <Cards
        img={swimmer}
        rating="5.0"
        reviewCount={6}
        country="USA"
        title="Life lessons with Katie Zaferes"
        price={136}
      />
    </div>
  );
}
