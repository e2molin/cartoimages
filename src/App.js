import React,{useState} from 'react';
import './App.css'
// import Home from './pages/Home'
// import SearchResults from './pages/SearchResults'
// import Detail from './pages/Detail'
// import StaticContext from './context/StaticContext'
// import {GifsContextProvider} from './c

import {Link,Route} from "wouter"

import ListOfGifs from 'components/ListOfGifs';

//const apiURL='https://api.giphy.com/v1/gifs/search?api_key=IjmmViOE2rq5nh9jplq6JWU32Dcak2Ju&q=elefante'

export default function App() {
           
  // eslint-disable-next-line
  const [keyword,setKeyword] = useState('cartography'); //Por defecto vale tomcat  to the line before.
  return (
  // <StaticContext.Provider value={{name: 'e2molin',  suscribeteAlCanal: true}}>
  //     {/* El contexto envuelve a todo para que todos los elementos y componentes dentro del contexto puedan acceder a él */}
  //     <div className="App">
  //       <section className="App-content">
  //         <Link to="/">
  //           <figure className="App-logo">
  //             <img alt='Giffy logo' src='http://www.develmap.com/img/logo.png' />
  //           </figure>
  //         </Link>
  //         {/* Menú original */}{/* Así se comenta dentro del bloque de representación donde usamos JSX */}
  //         <GifsContextProvider>
  //           <Route
  //             component={Home}
  //             path="/"
  //           />
  //           <Route
  //             component={SearchResults}
  //             path="/search/:keyword"  />
  //           <Route
  //             component={Detail}
  //             path="/gif/:id"
  //           />
  //         </GifsContextProvider>
  //       </section>
  //     </div>
  //   </StaticContext.Provider>
  
    <div className="App">
      <section className="App-content">
        <h1>App</h1>
        <Link to="/search/tiger">Imágenes de tigres</Link>
        <Link to="/search/lion">Imágenes de leones</Link>
        <Link to="/search/puma">Imágenes de pumas</Link>
        <Route
          component={ListOfGifs}
          path="/search/:keyword"  />
        {/* <button onClick={() => setKeyword('jaguar')}>Cambiar Keyword</button>
        <ListOfGifs keyword={keyword} />  */}
      </section>
    </div>
  )
}
