import React, { Component } from 'react';

const Portfolio = props => {
  return (
    <div>
      <div className="title">
        <h1 onClick={() => props.onPortfolioClick()}>Portfolio</h1>
      </div>
      <div className="portfolio-wrap">
        <div
          className={
            props.isPortfolioClicked
              ? 'portfolio-display portfolio-circle pink-portfolio-circle'
              : 'portfolio-circle pink-portfolio-circle'
          }
        >
          <p>This is my portfolio title</p>
          <p>Technologies used:</p>
          <p>Technologies used:</p>
        </div>
        <div
          className={
            props.isPortfolioClicked
              ? 'portfolio-display portfolio-circle teal-portfolio-circle'
              : 'portfolio-circle pink-portfolio-circle'
          }
        >
          <p>This is my portfolio</p>
        </div>
        <div
          className={
            props.isPortfolioClicked
              ? 'portfolio-display portfolio-circle purple-portfolio-circle'
              : 'portfolio-circle pink-portfolio-circle'
          }
        >
          <p>This is my portfolio</p>
        </div>
        <div
          className={
            props.isPortfolioClicked
              ? 'portfolio-display portfolio-circle purple-portfolio-circle'
              : 'portfolio-circle pink-portfolio-circle'
          }
        >
          <p>This is my portfolio</p>
        </div>
        <div
          className={
            props.isPortfolioClicked
              ? 'portfolio-display portfolio-circle teal-portfolio-circle'
              : 'portfolio-circle pink-portfolio-circle'
          }
        >
          <p>This is my portfolio</p>
        </div>
        <div
          className={
            props.isPortfolioClicked
              ? 'portfolio-display portfolio-circle pink-portfolio-circle'
              : 'portfolio-circle pink-portfolio-circle'
          }
        >
          <p>This is my portfolio</p>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
