import React, {useState, useEffect} from 'react';
import './App.css'
// import Home from './pages/Home'
// import SearchResults from './pages/SearchResults'
// import Detail from './pages/Detail'
// import StaticContext from './context/StaticContext'
// import {GifsContextProvider} from './c
import getGifsBase from 'services/getGifsBase';
import getGifs from 'services/getGifs';

// const GIFS=['https://media3.giphy.com/media/rj12FejFUysTK/giphy.gif',
//             'https://i.giphy.com/media/13kajTax0GCg0g/giphy.webp',
//             'https://i.giphy.com/media/8lJwA6kNkKyfC/giphy.webp'
//             ];

// const INITIAL_GIFS =['https://i.giphy.com/media/IntzOO5aNafJu/giphy.webp',
//                     'https://i.giphy.com/media/3o6QL31ZlTLXkW4NZS/giphy.webp',
//                     'https://i.giphy.com/media/LOFT5Jd31ON1b5kLtP/giphy.webp',
//                   ];


const DIFFERENT_GIFS=['https://i.giphy.com/media/j2pWZpr5RlpCodOB0d/giphy.webp',
                      'https://i.giphy.com/media/3oxHQpJKupQXsmU1JS/giphy.webp',
                      'https://i.giphy.com/media/6268H2Uc3mAQsLMIe3/giphy.webp'
                      ];

//const apiURL='https://api.giphy.com/v1/gifs/search?api_key=IjmmViOE2rq5nh9jplq6JWU32Dcak2Ju&q=elefante'

export default function App() {
  //Usamos un Hook
                        
  const [gifs, setGifs] = useState([]);

  useEffect(function() {
      console.log("Me ejecuto tras renderizar");
      getGifs().then(gifs => setGifs(gifs));
    }, []);

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
      {
        gifs.map(singleGif => {
          return  <div>
                    <h4>{singleGif.title}</h4>
                    <small>{singleGif.id}</small>
                    <img alt="" src={singleGif.url}/>
                  </div>;
        })
      }
      <button onClick={()=>setGifs(DIFFERENT_GIFS)}>Cambiar Gifs</button>
    </section>
  </div>
  )
}
