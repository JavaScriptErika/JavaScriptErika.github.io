import React, { Component } from 'react';

const Portfolio = props => {
  return (
    <div>
      <div className="title">
        <h1>Portfolio</h1>
      </div>
      <div className="portfolio-wrap">
        <div className="portfolio-circle pink-portfolio-circle">
          <p>This is my portfolio title</p>
          <p>Technologies used:</p>
          <p>Technologies used:</p>
        </div>
        <div className="portfolio-circle teal-portfolio-circle">
          <p>This is my portfolio</p>
        </div>
        <div className="portfolio-circle purple-portfolio-circle">
          <p>This is my portfolio</p>
        </div>
        <div className="portfolio-circle teal-portfolio-circle">
          <p>This is my portfolio</p>
        </div>
        <div className="portfolio-circle purple-portfolio-circle">
          <p>This is my portfolio</p>
        </div>
        <div className="portfolio-circle pink-portfolio-circle">
          <p>This is my portfolio</p>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
