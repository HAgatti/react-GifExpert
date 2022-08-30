
import { UseFetchGifs } from '../hooks/UseFetchGifs'
import { GifItem } from './GifItem'



export const GifGrid = ({category}) => {

  const{Imagenes, Cargando} = UseFetchGifs(category)

/*  TODO ESTE CODIGO COMENTADO SERA REEMPLAZADO POR UN CUSTOM HOOK(useFetchGifs)
   const [Images, setImages] = useState([])

   const getImages = async ()=>{
    const newImages = await getGifs(category);
    setImages(newImages)
   } 

    useEffect(() => {
      getImages();
      
    }, [])
*/
    

    return (
      <>
        <h3>{category}</h3>
        {
          Cargando && (<h2>Cargando...</h2>) //Si isLoading està en true
        }
        
        <div className='card-grid'>
          {//aca abajo se podia tranca desestructurar img = {id, title, etc}
           Imagenes.map( ((img) =>(
            <GifItem key={img.id}
            {...img}//le manda toda las prop juntas y es util cuando son muchas.
            /> 
           )))
          }           
        </div>
      </>    
    )
}
