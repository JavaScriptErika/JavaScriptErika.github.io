import React, { Component } from 'react';

class Home extends Component {
  componentDidMount() {
    this.interval = setInterval(this.props.setemojiIndex, 2000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div className="home-title">
        <h1>Erika Ritter</h1>
        <h4>
          I <span id="emoji">{this.props.emojiArr[this.props.emojiArrI]}</span> the web &amp; JS
        </h4>
      </div>
    );
  }
}

export default Home;
