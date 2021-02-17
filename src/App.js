import React from 'react';
import './App.css';

import Home from './pages/Home'
import SearchResults from './pages/SearchResults'
import Detail from './pages/Detail'

import {Link, Route} from "wouter"

function App() {


  return (
    <div className="App">
      <section className="App-content">
        <h1>CartoImagen</h1>
        <img className="logo" src="http://www.develmap.com/img/logo.png" />
        {/* Menú original */}{/* Así se comenta dentro del bloque de representación donde usamos JSX */}
        {/*
        <section className="menu">
          <Link to="/search/pandas">Gifs de pandas</Link>
          <Link to="/search/tiger">Gifs de tigres</Link>
          <Link to="/search/lion">Gifs de leones</Link>
        </section>
        */}
        

        <Route component={Home} path="/" />
        <Route component={SearchResults} path="/search/:keyword" />
        <Route component={Detail} path="/gif/:id" />


      </section>
    </div>
  );
}

export default App;
