import React from 'react';
import {BrowserRouter as Router, Link, Route, Miss} from 'react-router-dom';
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
        <Route exact path='/' component={Home}/>
        <Route path='/about' component={About}/>
        <Route path='/topics' component={Topics}/>
      </div>
    </Router>
  );
};

export default App;