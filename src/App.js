import React, { Component } from 'react';
import Menu from './Components/Menu';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Sketch from './Components/Sketch';
import P5Wrapper from 'react-p5-wrapper';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMenuClicked: false
    };
  }

  handleMenuClick = () => {
    this.setState(prevState => ({
      isMenuClicked: !prevState.isMenuClicked
    }));
  };

  render() {
    return (
      <div>
        <P5Wrapper sketch={Sketch} />
        <Router>
          <div>
            <Menu onMenuClick={this.handleMenuClick} isClicked={this.state.isMenuClicked} />
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/topics" component={Topics} />
          </div>
        </Router>
      </div>
    );
  }
}

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
);

const About = () => (
  <div>
    <h2>About</h2>
  </div>
);

const Topics = () => (
  <div>
    <h2>Topics</h2>
  </div>
);

export default App;
