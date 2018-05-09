import React from 'react';
import {BrowserRouter as Router, Link, Match, Miss} from 'react-router';
import Home from './Home'
import About from './About'
import Topics from './Topics'

const App = () => {
  return (
    <Router>
      <div>
        <ul>
          <li><Link to = "/">Home</Link></li>
          <li><Link to = "/About">About</Link></li>
          <li><Link to = "/Topics">Topics</Link></li>
        </ul>
        <hr/>
        <Match exactly pattern='/' component={Home}/>
        <Match pattern='/about' component={About}/>
        <Match pattern='/topics' component={Topics}/>
      </div>
    </Router>
  );
};

export default App;