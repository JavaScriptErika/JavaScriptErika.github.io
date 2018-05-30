import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import P5Wrapper from 'react-p5-wrapper';
import About from './Components/About';
import Contact from './Components/Contact';
import Home from './Components/Home';
import Menu from './Components/Menu';
import Portfolio from './Components/Portfolio';
import Sketch from './Components/Sketch';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMenuClicked: false,
      isScrolling: false,
      emojiArrIndex: 0
    };
  }

  render() {
    return (
      <div>
        <P5Wrapper sketch={Sketch} />
        <Router basename='test'>
          <div>
            <Menu onMenuClick={this.handleMenuClick} isClicked={this.state.isMenuClicked} />
            <Switch>
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
              <Route
                path="/about"
                render={props => (
                  <About
                    isScrolling={this.state.isScrolling}
                    onScroll={this.handleScroll}
                  />
                )}
              />
              <Route path="/portfolio" component={Portfolio} />
              <Route path="/contact" component={Contact} />
            </Switch>
          </div>
        </Router>
      </div>
    );
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

  handleScroll = e => window.scrollY > 2000 ? this.setState({ isScrolling: true }) : this.setState({ isScrolling: false })
}

const emojiArray = [...'💜🍰🍪🥨🥞🍭🍬🍿🧡🍩🌮🍫🍕🍦🍱🍧'];
export default App;
