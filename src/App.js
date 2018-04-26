import React, { Component } from 'react'
import Menu from './Components/Menu'
import { BrowserRouter as Router, Route } from 'react-router-dom'


const App = () => (
  <div>
  <Router>
    <div>
  <Menu />
    <Route exact path="/" component={Home} />
    <Route path="/about" component={About} />
    <Route path="/topics" component={Topics} />
    </div>
  </Router>
  </div>
)


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
)

export default App
