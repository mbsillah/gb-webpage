import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import HomePage from './components/HomePage'
import GBNavbar from './components/GBNavbar'
import Footer from './components/Footer'
import About from './components/About'


class App extends Component {
  render() {
    return (
      <Router>
        <div>
        <GBNavbar />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/about' component={About} />
        </Switch>
        <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
