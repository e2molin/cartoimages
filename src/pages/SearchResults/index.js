import React, {useCallback, useEffect,useRef} from 'react'
import Spinner from 'components/Spinner'
import ListOfGifs from 'components/ListOfGifs'
import {useGifs} from 'hooks/useGifs' //Custom Hook
import useNearScreen from 'hooks/useNearScreen'
import debounce from 'just-debounce-it' //Este paquete permite agrupar llamadas a una función. da

export default function SearchResults ({ params }) {
  
  const { keyword } = params
  const { loading, gifs, setPage } = useGifs({ keyword }) //Así usamos el custom hook que hemos hecho
  
  const externalRef =useRef()
  const {isNearScreen} = useNearScreen({externalRef: loading ? null: externalRef, once: false})//De esta manera al llegar al elemento visor isNearScreen cambia a true
  
  //const debounceHandleNextPage = useRef()
  //console.log(isNearScreen)

  //const handleNextPage = () => setPage(prevPage => prevPage + 1)//e2m.Go Next Page
  /**
   * Creamos este handle para lanzar la acción de cargar nueva página
   * pero hay que evitar que se llame muchas veces, porque puede reventar la página.
   * Para esto se utiliza un paquete llamado debounce, con el que podemos limitar esto
   *
   */ 

  // const handleNextPage = () => console.log("Next Page")

  // debounce: dado un tiempo, por ejemplo 500ms, si en ese tiempo una función se llama 200 veces, las llamadas se agrupan y sólo se genera una llamada
  const debounceHandleNextPage = useCallback(debounce(
    ()=>setPage(prevPage => prevPage + 1), 1000
  ),[])


  useEffect(function(){
    console.log(isNearScreen)
    if (isNearScreen) debounceHandleNextPage()
  },[debounceHandleNextPage,isNearScreen])// Con este efecto monitoreamos is NearScreeen y lanzamos el evento

  return <>
      {/**
        * Renderizado condicional que muestra el spinner hasta tener los datos de Giphy
        */}  
    {loading
      ? <Spinner />
      : <>
        <h3 className="App-title">
          {decodeURI(keyword)}
        </h3>
        <ListOfGifs gifs={gifs} />
        {/**
         * Este elemento es el que vamos a vigilar para detectar el final del último GIF
         * y desaencadenar el Infinity Scroll
         */}
        <div id="visor" ref={externalRef}></div>
      </>
    }
    <br />
    {/*<button onClick={handleNextPage}>Get next page</button> */}
  </>
}