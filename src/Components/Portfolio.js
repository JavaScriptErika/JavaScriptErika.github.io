import React, { Component } from 'react';
import PageTitle from './PageTitle'
import memory from './../images/memory-game.png'
import Bounce from 'react-reveal/Bounce';


const Portfolio = props => {
  return (
    <div>
      <PageTitle titleName={'portfolio'} />
      <div className="portfolio-wrap">
        <Bounce left>
          <div className="portfolio-circle purple-portfolio-circle">
            <h2>Memory Game</h2>
            <img src={memory} alt="memory game screenshot" />
            <div className="overlay">
              <h2>Vanilla JS 🍦 and CSS 🎨</h2>
              <p><a href="https://javascripterika.github.io/memory-game/">Play online</a></p>
              <p><a href="https://github.com/JavaScriptErika/memory-game">Check out Code</a></p>
              <p>Match 16 cards with their corresponding emojis. I constantly thought about ideal
                vs unwanted user actions during development!
              </p>
            </div>
          </div>
          <div className="portfolio-circle teal-portfolio-circle">
            <p>This is my portfolio</p>
            <div className="overlay" />
          </div>
          <div className="portfolio-circle purple-portfolio-circle">
            <p>This is my portfolio</p>
            <div className="overlay" />
          </div>
        </Bounce>
        <Bounce right>
          <div className="portfolio-circle purple-portfolio-circle">
            <div className="overlay" />
            <p>This is my portfolio</p>
          </div>
          <div className="portfolio-circle pink-portfolio-circle">
            <div className="overlay" />
            <p>This is my portfolio</p>
          </div>
          <div className="portfolio-circle teal-portfolio-circle">
            <div className="overlay" />
            <p>This is my portfolio</p>
          </div>
        </Bounce>
      </div>
    </div>
  );
};

export default Portfolio;
