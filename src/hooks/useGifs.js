import {useEffect,useState} from 'react'
import getGifs from '../services/getGifs'

export function useGifs({keyword} = {keyword: null}){

  const [loading,setLoading] = useState(false);
  const [gifs, setGifs] = useState([])

  //const keywordToUse = keyword ? keyword : localStorage.getItem('lastKeyword') //La de abajo es Equivalente

  const keywordToUse = keyword || localStorage.getItem('lastKeyword')

  //Esta función se ejecuta cada vez que se renderiza el componente
  useEffect(function(){
              setLoading(true)
              getGifs({ keyword: keywordToUse})
                .then(gifs =>{
                  setGifs(gifs)
                  setLoading(false)
                  localStorage.setItem('lastKeyword',keyword) //Almacenamos la última búsqueda
              })
  },[keyword])//Pero aquí le decimos que se ejecute sólo cuando se renderice el componente y cambie el valor de keyword

  return {loading,gifs}

}