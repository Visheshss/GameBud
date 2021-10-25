import React, { useState, useEffect } from 'react';
import './App.css';
import {Home} from './pages/home'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
// import 'bootstrap/dist/css/bootstrap.css';


function App() {
  return (
    <div className="App">
       <Home/>
    </div>
  );
}

export default App;
