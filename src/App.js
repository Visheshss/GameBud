import React, { useState, useEffect } from 'react';
import './App.css';
import {Home} from './pages/home'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import {ShowGame} from './pages/showgame'


function App() {
  return (
    <Router>
        <Switch>
          <Route exact path='/home'>
            <Home/>
          </Route>
          <Route path='/:id'>
            <ShowGame/>
          </Route>
        </Switch>
    </Router> 
  );
}

export default App;
