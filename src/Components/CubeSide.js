import React, { Component } from 'react';
import 'font-awesome/css/font-awesome.min.css';

const CubeSide = () => {
  return (
    <ul className="cube-nav">
      <li>
        <a href="https://twitter.com/javascripterika">
          <i className="fa fa-twitter" />
        </a>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/erika-ritter/">
          <i className="fa fa-linkedin" />
        </a>
      </li>
      <li>
        <a href="https://codepen.io/JavaScriptErika/">
          <i className="fa fa-codepen" />
        </a>
      </li>
      <li>
        <a href="https://github.com/javascripterika">
          <i className="fa fa-github" />
        </a>
      </li>
    </ul>
  );
};

export default CubeSide;
