import React, {useState} from 'react';
import './App.css';

import ListOfGifs  from './components/ListOfGifs'

import {Link, Route} from "wouter"


function App() {


  return (
    <div className="App">
      <section className="App-content">
        <h1>App</h1>
        <section className="menu">
          <Link to="/gif/pandas">Gifs de pandas</Link>
          <Link to="/gif/tiger">Gifs de tigres</Link>
          <Link to="/gif/lion">Gifs de leones</Link>
        </section>
        <Route path="/gif/:keyword" component={ListOfGifs} />
      </section>
    </div>
  );
}

export default App;
