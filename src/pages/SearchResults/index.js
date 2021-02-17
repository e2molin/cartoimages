import React from "react";
import Spinner from '../../components/Spinner'
import ListOfGifs from '../../components/ListOfGifs'
import {useGifs} from '../../hooks/useGifs' //Custom Hooks

export default function SearchResults({ params }){

  const {keyword} = params
  const {loading, gifs} = useGifs({keyword}) //Asú usamos el custom hook que hemos hecho

  return (
    <>
      {/**
       * Renderizado condicional que muestra el spinner hasta tener los datos de Giphy
       */}
      {loading ? <Spinner/> : <ListOfGifs gifs={gifs} />}
    </>
  )

}