import React, { Component } from 'react';
import Heroes from './components/Heroes'
import Header from './components/Header'
import Hero from './components/Hero'
import { BrowserRouter as Router, Route } from 'react-router-dom'

class App extends Component {
  constructor () {
    super()
    this.state = {
      heroes: []
    }
  }

  render() {
    return (
      <Router>
        <div className="container">
          <Header></Header>
          <Route exact path="/" component={Heroes}/>
          <Route path="/hero/:id" component={Hero}/>
        </div>
      </Router>
    );
  }
}



export default App;
