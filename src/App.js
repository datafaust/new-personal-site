  
import React, {Component} from 'react';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';

import 'bootstrap/dist/css/bootstrap.min.css';



const App = props => {
  return (
    <Router>
    <div>
      <Route exact path="/" component = {Home}/>
      <Route path="/about" component = {About}/>
      <Route path="/projects" component = {Projects}/>
      {/* <Route path="/pricing" component = {Pricing} /> */}
    </div>
    </Router>
  );
};


export default App;