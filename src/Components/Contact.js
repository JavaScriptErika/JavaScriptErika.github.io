import React, { Component } from 'react';
import CubeSide from './CubeSide';
import PageTitle from './PageTitle';

const Contact = () => (
  <div>
    <PageTitle titleName={'contact'} />
    <div className="cube-container">
      <div className="cube">
        <div className="side front">
          <CubeSide />
        </div>
        <div className="side back">
          <CubeSide />
        </div>
        <div className="side left">
          <CubeSide />
        </div>
        <div className="side right">
          <CubeSide />
        </div>
        <div className="side top">
          <ul className="cube-nav">
            <li>
              <a href="mailto:erikajritter@gmail.com">
                <i className="fa fa-envelope" />
              </a>
            </li>
          </ul>
        </div>
        <div className="side bottom" />
        <div className="side shadow" />
      </div>
    </div>
  </div>
);

export default Contact;
