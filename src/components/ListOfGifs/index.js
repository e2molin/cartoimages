import React, {useState, useEffect} from 'react';
import Gif from '../Gif'
import getGifs from 'services/getGifs';
import './styles.css'

export default function ListOfGifs ({params}) {

  const {keyword}=params;// Antes pasábamos directamente keyword. Ahora viene metida dentro de params
  const [gifs, setGifs] = useState([]);

  useEffect(function() {
      console.log("Renderizo cuando cambia la keyword");
      getGifs({keyword}).then(gifs => setGifs(gifs));
    }, [keyword]); 

  return <div className='ListOfGifs'>
    {
      gifs.map(({ id, title, url }) =>
        <Gif
          id={id}
          key={id}
          title={title}
          url={url}
        />
      )
    }
  </div>
}

// En este componenete, hemos convertido a keyword en una dependencia del efecto. Lo ideal es que el contenido se vuelva a renderizar cada vez que cambie cada vez que renderizamos




// El código es equivalente a este. Hacerlo de la manera anterior nos asegura que las propiedades de los objetos son realmente las que queremos.

// export default function ListOfGifs ({gifs}) {
//   return <div className='ListOfGifs'>
//     {
//       gifs.map((singleGif) =>
//         <Gif
//           id={singleGif.id}
//           key={singleGif.id}
//           title={singleGif.title}
//           url={singleGif.url}
//         />
//       )
//     }
//   </div>
// }