import React, { Component } from 'react';

const About = () => (
  <div>
    <div className="title about">
      <h1>About</h1>
    </div>
    <div className="about-intro">
      <h4>I'm a developer who loves creative code.</h4>
    </div>
    <div className="about-circle-wrapper">
      <div className="left-circle" />
      <div className="right-circle" />
    </div>

    <div className="code-about-description">
      <pre>
        <code>
          {`const`} <span>about</span> {`= [{ `}
          <br />
          <span>name</span>
          {`: 'Erika Ritter', `}
          <br />
          <span>cat_Mom</span>
          {`: '🐱🐱🐱🐱', `}
          <br />
          <span>Fav_Foods</span>
          {`: '🌯🍝🍦', `}
          <br />
          <span>Soft_Skills</span>
          {`: [
      'eager life-long learner',
      'active communicator',
      'happy team player'
    ]
  },
  { `}
          <br />
          <span>dev_Type</span>
          {`: front-end,`}
          <br />
          <span>began_Coding</span>
          {`: 2015,`}
          <br />
          <span>tech_Skills</span>
          {`: [
      'JavaScript | jQuery',
      'AJAX | JSON',
      'CSS | SASS',
      'Bulma | Flexbox',
      'Responsive Design',
      'HTML | Pug'
    ],`}
          <br />
          <span>exposure</span>
          {`: [
      'React',
      'Preact',
      'p5.js',
      'Greensock',
      'Adobe Illustrator',
      'Wordpress'
    ]
  }
]`}
        </code>
      </pre>
    </div>
  </div>
);
export default About;
