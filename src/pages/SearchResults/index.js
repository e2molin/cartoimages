import React from 'react'
import Spinner from 'components/Spinner'
import ListOfGifs from 'components/ListOfGifs'
import {useGifs} from 'hooks/useGifs' //Custom Hook

export default function SearchResults ({ params }) {
  const { keyword } = params
  const { loading, gifs, setPage } = useGifs({ keyword }) //Así usamos el custom hook que hemos hecho

  const handleNextPage = () => setPage(prevPage => prevPage + 1)

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
      </>
    }
    <br />
    <button onClick={handleNextPage}>Get next page</button>
  </>
}