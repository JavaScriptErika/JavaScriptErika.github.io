import React, { Component } from 'react';
import PageTitle from './PageTitle';
import memory from './../images/memory-game.png';
import weather from './../images/weather-project.png';
import pixel from './../images/pixel-maker.png';
import trivia from './../images/trivia-app.png';
import ori from './../images/ori.png';
import mono from './../images/monolambda.png';
import monster from './../images/monster.png';
import register from './../images/register.png';
import hartman from './../images/hartman.png';
import Bounce from 'react-reveal/Bounce';


const Portfolio = props => {
  return (
    <div>
      <PageTitle titleName={'portfolio'} />
      <div className="portfolio-wrap">
        <Bounce left>
          <div className="circle">
            <div className="portfolio-circle purple-portfolio-circle">
              <h2>Memory Game</h2>
              <img src={memory} alt="memory game screenshot" />
            </div>
            <div className="back">
              <h2>Vanilla JS 🍦 &amp; CSS 🎨</h2>
              <p><a href="https://javascripterika.github.io/memory-game/">Play Game</a></p>
              <p><a href="https://github.com/JavaScriptErika/memory-game">Check out Code</a></p>
              <p>Match 16 cards with their corresponding emojis. I constantly thought about ideal
                vs unwanted user actions during development!
              </p>
            </div>
          </div>
          <div className="circle">
            <div className="portfolio-circle teal-portfolio-circle">
              <h2>Weather API</h2>
              <img src={weather} alt="weather app screenshot displaying condtions" />
            </div>
            <div className="back">
              <h2>jQuery &amp; AJAX</h2>
              <p><a href="https://javascripterika.github.io/WeatherAPI/">View Weather Conditions</a></p>
              <p><a href="https://github.com/JavaScriptErika/WeatherAPI">Check out Code</a></p>
              <p>Using the browser's geolocation, coordinates are parsed by Google Maps Geocoding
                API and passed to Dark Sky API.
              </p>
            </div>
          </div>
          <div className="circle">
            <div className="portfolio-circle pink-portfolio-circle">
              <h2>Pixel Art Maker</h2>
              <img src={pixel} alt="pixel art app displayed showing grid" />
            </div>
            <div className="back">
              <h2>Vanilla JS, Sass, Webpack</h2>
              <p><a href="https://codepen.io/JavaScriptErika/full/ppBMMm/">Create Art</a></p>
              <p><a href="https://github.com/JavaScriptErika/pixelMaker">Check out Code</a></p>
              <p>Make pixel art on a dynamic grid. Developed in a webpack environment.
              </p>
            </div>
          </div>
        </Bounce>

        <Bounce right>
          <div className="circle">
            <div className="portfolio-circle pink-portfolio-circle">
              <h2>JS Trivia App</h2>
              <img src={trivia} alt="trivia app screenshot example" />
            </div>
            <div className="back">
              <h2>React & Milligram</h2>
              <p><a href="https://codepen.io/JavaScriptErika/full/zWmVmO/">Take Quiz</a></p>
              <p><a href="https://codepen.io/JavaScriptErika/pen/zWmVmO">Check out Code</a></p>
              <p>Test your JS knowledge! The display of possible
                answers are dynamically generated depending on the number of choices in the data.
              </p>
            </div>
          </div>
          <div className="circle">
            <div className="portfolio-circle purple-portfolio-circle">
              <h2>Ori & the Blind Forest</h2>
              <img src={ori} alt="pure css of naru and ori" />
            </div>
            <div className="back">
              <h2>Pure CSS</h2>
              <p><a href="https://codepen.io/JavaScriptErika/full/WMeEwr/">View Project</a></p>
              <p><a href="https://codepen.io/JavaScriptErika/pen/WMeEwr/">Check out Code</a></p>
              <p>Part of a Cascading Coder's challenge, this scene was developed using Sass and
                Pug.
              </p>
            </div>
          </div>
          <div className="circle">
            <div className="portfolio-circle teal-portfolio-circle">
              <h2>Cursor Follow</h2>
              <img src={monster} alt="pure css of naru and ori" />
            </div>
            <div className="back">
              <h2>Vanilla JS & Sass</h2>
              <p><a href="https://codepen.io/JavaScriptErika/full/eyrPjB/">Get Followed</a></p>
              <p><a href="https://codepen.io/JavaScriptErika/pen/eyrPjB">Check out Code</a></p>
              <p>I was inspired to do a cursor eye follow. Exploring arc tangent of 2 numbers,
                I calculated the angle to rotate the monster's pupil.
              </p>
            </div>
          </div>
        </Bounce>

        <Bounce left>
          <div className="circle">
            <div className="portfolio-circle purple-portfolio-circle">
              <h2>Landing Page</h2>
              <img src={mono} alt="hero screenshot of monoLambda landing page" />
            </div>
            <div className="back">
              <h2>Vanilla JS, Preact & Sass</h2>
              <p><a href="https://monolambda.com/">View Online</a></p>
              <p><a href="https://github.com/monolambda/monolambda">Check out Code</a></p>
              <p>Implemented nav bar behavior, validation of form,
                and hero/services/footer sections.
              </p>
            </div>
          </div>
          <div className="circle">
            <div className="portfolio-circle teal-portfolio-circle">
              <h2>Registration App</h2>
              <img src={register} alt="screenshot of registration app" />
            </div>
            <div className="back">
              <h2>React and Milligram</h2>
              <p><a href="https://codepen.io/JavaScriptErika/full/rdQqWm/">Get Registered</a></p>
              <p><a href="https://codepen.io/JavaScriptErika/pen/rdQqWm">Check out Code</a></p>
              <p>Registration app uses a form in React to display controlled component
                functionality.
              </p>
            </div>
          </div>
          <div className="circle">
            <div className="portfolio-circle pink-portfolio-circle">
              <h2>Veterinary Website</h2>
              <img src={hartman} alt="screenshot of hartman veterinary website" />
            </div>
            <div className="back">
              <h2>Wordpress</h2>
              <p><a href="http://hartmanvet.com/">View Website</a></p>
              <p>Website redesign implementing CSS and PHP for structure
                and functionality, copy was also rewritten.
              </p>
            </div>
          </div>
        </Bounce>
      </div>
    </div >
  );
};

export default Portfolio;
