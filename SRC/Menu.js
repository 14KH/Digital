import React from "react";
import "../src/Menu.css";

export default function Menu() {
  return (
    <nav className="topnav">
      <a className="active" href="#home">Home</a>
      <a href="#news">News</a>
      <a href="#contact">Contact</a>
      <a href="#about">About</a>
    </nav>
  );
}
