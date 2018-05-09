import React from 'react';
import {BrowserRouter as Router, Link, Match, Miss} from 'react-router';

const App = () => {
  return (
    <Router>
      <div>
        <ul>
        <li><Link to = "/">Home</Link></li>
        </ul>
      </div>
    </Router>
  );
};

export default App;