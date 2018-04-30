import React, { Component } from 'react';

const Circles = props => {
  return (
    <div>
      <div className="about-intro">
        <h4>{props.description}</h4>
      </div>
      <div className="about-circle-wrapper">
        <div className={props.isScrolling ? 'left-circle left-circle-enter' : 'left-circle'} />
        <div className={props.isScrolling ? 'right-circle right-circle-enter' : 'right-circle'} />
      </div>
    </div>
  );
};

export default Circles;
