/**
 * 🧩 Componente para generar un listado de imágenes maquetdas en cards
 */
import React, {useEffect, useState} from 'react';
import Gif  from './Gif'
import getGifs from '../services/getGifs'


export default function ListOfGifs({ params }){

  const {keyword} = params

  const  [gifs, setGifs] = useState([])

  //Se ejecuta cada vez que se renderiza el componente.
  useEffect(function (){
    getGifs({ keyword })
      .then(gifs=> setGifs(gifs))
  },[keyword])//La dependencia de este efecto es keyword. Al cambiar se volverá a renderizar. Sólo se renderiza al cambar el valor de keyword
  


  return <div>
            {
                gifs.map(singleGif =>
                  <Gif
                    key={singleGif.id}
                    id={singleGif.id} 
                    title={singleGif.title}
                    url={singleGif.url}
                  />
                )            
            }
          </div>

}