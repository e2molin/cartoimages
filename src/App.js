import React from 'react';
import './App.css'
import Home from './pages/Home'
import SearchResults from './pages/SearchResults'
import Detail from './pages/Detail'
import StaticContext from './context/StaticContext'
import {GifsContextProvider} from './context/GifsContext'
import { Link, Route } from "wouter"

export default function App() {
  return (
  <StaticContext.Provider value={{name: 'e2molin',  suscribeteAlCanal: true}}>
      {/* El contexto envuelve a todo para que todos los elementos y componentes dentro del contexto puedan acceder a él */}
      <div className="App">
        <section className="App-content">
          <Link to="/">
            <figure className="App-logo">
              <img alt='Giffy logo' src='http://www.develmap.com/img/logo.png' />
            </figure>
          </Link>
          {/* Menú original */}{/* Así se comenta dentro del bloque de representación donde usamos JSX */}
          <GifsContextProvider>
            <Route
              component={Home}
              path="/"
            />
            <Route
              component={SearchResults}
              path="/search/:keyword"  />
            <Route
              component={Detail}
              path="/gif/:id"
            />
          </GifsContextProvider>
        </section>
      </div>
    </StaticContext.Provider>
  )
}
