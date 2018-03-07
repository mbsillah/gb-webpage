import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import HomePage from './components/HomePage'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import About from './components/About'
import Contact from './components/Contact'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
        <Navbar />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/about' component={About} />
          <Route exact path='/contact' component={Contact} />
        </Switch>
        <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
