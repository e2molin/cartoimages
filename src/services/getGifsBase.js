import {API_KEY, API_URL} from './settings';
import Gif from 'components/Gif';
import getGifs from 'services/getGifs';

// Ponemos un valor por defecto. Si no llega nada el valor que tomará sera {}, y por defecto buscará elephant
export default function getGifsBase ({keyword = 'elephant'} = {}) {
    const apiURL=`${API_URL}/gifs/search?api_key=${API_KEY}&q=${keyword}`;
    console.log(apiURL);
    return fetch(apiURL)
      .then(res => res.json())
      .then(response =>{
        const {data=[]} = response;
        const gifs=data.map(image =>image.images.downsized_medium.url);
        return gifs;
      })
}


