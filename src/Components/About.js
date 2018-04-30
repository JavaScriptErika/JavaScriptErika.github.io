import React, { Component } from 'react';
import Circles from './Circles';
import ccLogo from './../images/cc-logo.svg';

class About extends Component {
  componentDidMount() {
    window.addEventListener('scroll', this.props.onScroll, false);
  }

  componentWillUmount() {
    window.removeEventListener('scroll', this.props.onScroll, false);
  }

  render() {
    return (
      <div>
        <div className="title about">
          <h1>About</h1>
        </div>
        <Circles description={`I'm a developer who loves creative code.`} isScrolling={this.props.isScrolling} />
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
        <div className="about-cascading-coders">
          <div className="cc-logo-wrap">
            <img src={ccLogo} alt="Cascading Coders meatball logo" />
          </div>
          <div>
            <h3>
              In March 2018, I founded a group called Cascading Coders. We're a welcoming community of developers of all
              skill levels who have a love or interest in creative code.
            </h3>
            <h3>
              We curate content/resources, hold CSS/SVG/Canvas creative code challenges voted on by members, and inspire
              each other to become better Cascading Coders.
            </h3>
            <div class="join-cc-wrap">
              <div className="join-cc-info">
                <h3>👥 Join Us</h3>
                <ul>
                  <li>
                    <a href="https://discordapp.com/invite/5P3kYbP" target="_blank">
                      Discord
                    </a>
                  </li>
                  <li>
                    <a href="https://www.facebook.com/groups/1752972351391061/" target="_blank">
                      FB Group
                    </a>
                  </li>
                </ul>
              </div>
              <div className="join-cc-info">
                <h3>💜 & Follow</h3>
                <ul>
                  <li>
                    <a href="https://twitter.com/cascadingcoders" target="_blank">
                      Twitter
                    </a>
                  </li>
                  <li>
                    <a href="https://www.facebook.com/CascadingCoders/" target="_blank">
                      FB Page
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <Circles description={`Code is art, the world's my canvas`} isScrolling={this.props.isScrolling} />
      </div>
    );
  }
}
export default About;
