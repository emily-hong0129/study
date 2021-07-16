import React, {useState} from 'react';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom'
import Gallery from './Gallery';
import About from './About';

import './Gallery.css'
import './App.css';

function App(){
  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <ul>
            <li>
              <Link to="/">Gallery</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route exact path = "/">
            <Gallery/>
          </Route>
          <Route path = "/about">
            <About/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
