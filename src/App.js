import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router,Link} from 'react-router-dom';
import Route from 'react-router-dom/Route';
import Home from './component/home';
import Content from './component/content';
class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <Route path="/" exact strict component={Home} />
        <Route path="/details/:name" exact strict component={Content} />
      </div>
      </Router>
    );
  }
}

export default App;
