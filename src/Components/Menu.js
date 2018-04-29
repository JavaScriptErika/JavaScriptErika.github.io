import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const Menu = () => (
  <div>
    <div class="gooey-effect-wrapper">
      <div class="nav-wrap">
        <div class="blob menu">
          <p>menu</p>
        </div>
        <div class="blob home">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </div>
        <div class="blob portfolio">
          <Link to="/topics">Topics</Link>
          <a href="">contact</a>
        </div>
      </div>
    </div>

    <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
      <defs>
        <filter id="goo">
          <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
          <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -5" result="goo" />
          <feBlend in="SourceGraphic" in2="goo" />
        </filter>
      </defs>
    </svg>
  </div>
);

export default Menu;
