import React from 'react';
import { Link } from 'react-router-dom';

const Menu = props => {
  return (
    <div>
      <div className="gooey-effect-wrapper">
        <div className="nav-wrap" onClick={() => props.onMenuClick()}>
          <div className={props.isClicked ? 'blob' : 'blob menuPulse'}>
            <p id='hamburger'>🍔</p>
          </div>
          <div className={props.isClicked ? 'menuActiveLeft blob home' : 'blob home'}>
            <Link to="/">home</Link>
            <Link to="/about">about</Link>
          </div>
          <div className={props.isClicked ? 'menuActiveRight blob portfolio' : 'blob portfolio'}>
            <Link to="/portfolio">portfolio</Link>
            <Link to="/contact">contact</Link>
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
};

export default Menu;
