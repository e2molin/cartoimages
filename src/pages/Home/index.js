import React, {useState} from "react"
import { useLocation } from "wouter" // useLocation es un hook de wouter
import ListOfGifs from 'components/ListOfGifs'
import {useGifs} from 'hooks/useGifs'
import TrendingSearches from 'components/TrendingSearches'

export default function Home() {
  const [keyword, setKeyword] = useState('')
  const [path, pushLocation] = useLocation()

  const {loading, gifs} = useGifs() // Aquí usamos un custom hook para mostrar algunos por defecto


    // Extraemos los métodos de callback en constantes por limpieza de código. Dejarlos dentro del JSX es más lioso
  const handleSubmit = evt => {
    evt.preventDefault()  // Así evitamos el comportamiento por defecto de la página, que sería refrescarse y borrar el contenido del imputbox
    pushLocation(`/search/${keyword}`)  //usamos el hook de Wouter para navegar programáticamente a la ruta de búsquedas
  }

  const handleChange = evt => {
    // Cada vez que actualizamos el contenido del input actualizamos el keyword
    setKeyword(evt.target.value)
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <button>Buscar</button>
        <input placeholder="Search a gif here..." onChange={handleChange} type='text' value={keyword} />
      </form>
      <div className="App-main">
        <div className="App-results">
          <h3 className="App-title">Última búsqueda</h3>
          <ListOfGifs gifs={gifs} />
        </div>
        <div className="App-category">
          <TrendingSearches />
        </div>
      </div>
    </>
  )
}