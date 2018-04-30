import React, { Component } from 'react';

class Home extends Component {
  componentDidMount() {
    this.interval = setInterval(this.props.setemojiIndex, 3000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div className="title">
        <h1>Erika Ritter</h1>
        <h4>
          I <span id="emoji">{this.props.emojiArr[this.props.emojiArrI]}</span> the web &amp; JS
        </h4>
      </div>
    );
  }
}

export default Home;
