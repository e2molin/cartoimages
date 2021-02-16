/**
 * 🧩 Componente para generar las cards con las imágenes  * 
 */
import React from 'react'
import './Gif.css'

export default function Gif({id,title, url}){

  return (
        <a href={`#${id}`} className='Gifcontainer'>
          <h4>{title}</h4>
          <small>{id}</small>
          <img src={url} title={title} />
        </a>
        ) 

}
