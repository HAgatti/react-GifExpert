//.js porque en esta caso no esta devolviendo un jsx.

import { getGifs } from '../helpers/getGifs'
import { useState, useEffect } from "react"



export const UseFetchGifs = (category) => {

    const [Images, setImages] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const getImages = async ()=>{
        const newImages = await getGifs(category);
        setImages(newImages)
        setIsLoading(false)
    } 
 
     useEffect(() => {
       getImages();
       
     }, [])


  return (
    {
        Imagenes: Images,//puedo dejar una sola si se llaman iguales, por ej: Images. YO prefiero que no por ahora para entender
        Cargando: isLoading
    }
  )
}
