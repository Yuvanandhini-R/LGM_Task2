import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import GetUsers from './components/pages/GetUsers';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/GetUsers' component={GetUsers} />
        </Switch>
      </Router>
    </>
  );
}

export default App;