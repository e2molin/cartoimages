import React,{useState} from "react"
import {Link, useLocation} from "wouter" //useLocation es un hook de wouter
import Spinner from '../../components/Spinner'
import ListOfGifs from '../../components/ListOfGifs'
import {useGifs} from '../../hooks/useGifs'

const POPULAR_SEARCHES = ["Paris", "Madrid", "Roma", "London", "New York"]

export default function Home() {

  const [keyword,setKeyword] = useState('')
  const [path,pushLocation] = useLocation() 

  //Aquí usamos un custom hook para mostrar algunos por defecto
  const {loading,gifs} = useGifs()


  //Extraemos los métodos de callback en constantes por limpieza de código. Dejarlos dentro del JSX es más lioso
  const handleSubmit = evt =>{
    //Navegar a otra ruta
    evt.preventDefault() //Así evitamos el comportamiento por defecto de la página, que sería refrescarse y borrar el contenido del imputbox
    pushLocation(`/search/${keyword}`) //usamos el hook de Wouter para navegar programáticamente a la ruta de búsquedas
    console.log(keyword);
  }
  const handleChange = evt =>{
    // Cada vez que actualizamos el contenido del input actualizamos el keyword
    setKeyword(evt.target.value);
  }

  return (
    <>
      <h3 className="App-Title">Buscador</h3>
      <form onSubmit={handleSubmit}>
        <input type="text" value={keyword} onChange={handleChange} placeholder="Introduce GIF a buscar"></input>
      </form>
      <h3 className="App-Title">Los Gifs más populares</h3>
      <ul>
          {
            POPULAR_SEARCHES.map((popularTerm)=>(
              <li key={popularTerm}>
                <Link to={`/search/${popularTerm}`}>Gifs de {popularTerm}</Link>
              </li>
            ))
          }
      </ul>

      {loading ? <Spinner/> : <ListOfGifs gifs={gifs} />}

    </>
  )

}