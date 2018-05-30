import React, { Component } from 'react';
import CubeSide from './CubeSide';
import PageTitle from './PageTitle';
import Bounce from 'react-reveal/Bounce';

const Contact = () => (
  <div>
    <PageTitle titleName={'contact'} />
    <Bounce top>
      <div className="cube-container">
        <div className="cube">
          <div className="side front">
            <CubeSide />
          </div>
          <div className="side rear">
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
    </Bounce>
  </div>
);

export default Contact;
