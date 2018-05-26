import React, { Component } from 'react';

class PageTitle extends Component {

  render() {
    return (
      <div className="title">
        <h1>{this.props.titleName}</h1>
      </div>
    )
  }
}

export default PageTitle;