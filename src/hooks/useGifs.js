import {useContext, useEffect, useState} from 'react'
import getGifs from '../services/getGifs'
import GifsContext from '../context/GifsContext'

const INITIAL_PAGE = 0

// Así se pasa un parámetro opcional
export function useGifs ({ keyword } = { keyword: null }) {
  const [loading, setLoading] = useState(false)
  const [loadingNextPage, setLoadingNextPage] = useState(false)

  const [page, setPage] = useState(INITIAL_PAGE)
  const {gifs, setGifs} = useContext(GifsContext)

  // Recuperamos la keyword del localStorage
  const keywordToUse = keyword || localStorage.getItem('lastKeyword') || 'random'
    //const keywordToUse = keyword ? keyword : localStorage.getItem('lastKeyword') //👆 Equivalente


    // Esta función se ejecuta cada vez que se renderiza el componente
  useEffect(function () {
    setLoading(true)

    getGifs({ keyword: keywordToUse })
      .then(gifs => {
        setGifs(gifs)
        setLoading(false)
        localStorage.setItem('lastKeyword', keyword) // Almacenamos la última búsqueda
      })
  }, [keyword, keywordToUse, setGifs]) // Pero aquí le decimos que se ejecute sólo cuando se renderice el componente y cambie el valor de keyword

  useEffect(function () {
    if (page === INITIAL_PAGE) return

    setLoadingNextPage(true)

    getGifs({ keyword: keywordToUse, page })
      .then(nextGifs => {
        setGifs(prevGifs => prevGifs.concat(nextGifs))
        setLoadingNextPage(false)
      })
  }, [keywordToUse, page, setGifs])

  return {loading, loadingNextPage, gifs, setPage}
}