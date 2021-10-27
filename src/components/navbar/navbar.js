import React, { Component } from "react";

export const NavBar = () => {
  return (
    <div className="topnav">
        <a className="active" href="/home">Home</a>
        <a href="#news">News</a>
        <a href="#contact">Contact</a>
        <a href="#about">About</a>
        <h1 id='navtitle'>GameBud</h1>
    </div>
  );
};


