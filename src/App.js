import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import P5Wrapper from 'react-p5-wrapper';
import Home from './Components/Home';
import Menu from './Components/Menu';
import Sketch from './Components/Sketch';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMenuClicked: false,
      emojiArrIndex: 0
    };
  }

  handleMenuClick = () => {
    this.setState(prevState => ({
      isMenuClicked: !prevState.isMenuClicked
    }));
  };

  generateRandomNum = (minimum = 0, maximum = emojiArray.length - 1) => {
    return Math.floor(Math.random() * (maximum - minimum + 1));
  };

  setNumToEmojiIndex = () => {
    this.setState({
      emojiArrIndex: this.generateRandomNum()
    });
  };

  render() {
    return (
      <div>
        <P5Wrapper sketch={Sketch} />
        <Router>
          <div>
            <Menu onMenuClick={this.handleMenuClick} isClicked={this.state.isMenuClicked} />
            <Route
              exact
              path="/"
              render={props => (
                <Home
                  emojiArr={emojiArray}
                  setemojiIndex={this.setNumToEmojiIndex}
                  emojiArrI={this.state.emojiArrIndex}
                />
              )}
            />
            <Route path="/about" component={About} />
            <Route path="/portfolio" component={Portfolio} />
            <Route path="/contact" component={Contact} />
          </div>
        </Router>
      </div>
    );
  }
}

const emojiArray = [...'💜🍰🍪🥨🥞🍭🍬🍿🧡🍩🌮🍫🍕🍦🍱🍧'];
const About = () => (
  <div>
    <h2>About</h2>
  </div>
);
const Portfolio = () => (
  <div>
    <h2>Portfolio</h2>
  </div>
);
const Contact = () => (
  <div>
    <h2>Contact</h2>
  </div>
);
export default App;
