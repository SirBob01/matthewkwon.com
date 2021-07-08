import React, { useState, useEffect } from 'react';
import './App.css';
import * as THREE from "three";
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Blog from './Blog';
import Post from './Post';
import Experience from './Experience';

function App() {

  const [expanded, setExpanded] = useState(true);

  return (
    <div className="App">
      <BrowserRouter>
        <Header navExpanded={setExpanded}/>
        <div style={{display: (expanded ? "block" : "none")}}>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/experience' component={Experience}/>
            <Route exact path='/blog' component={Blog}/>
            <Route exact path='/blog/:pid' component={Post}/>
          </Switch>
        </div>
    </BrowserRouter>
    </div>
  );
}

export default App;
