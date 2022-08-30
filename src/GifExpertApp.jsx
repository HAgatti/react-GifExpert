/* 
import { AddCategory } from "./components/AddCategory"
import { GifGrid } from "./components/GifGrid" */
import { useState } from "react"
import { AddCategory, GifGrid } from './components';




export const GifExpertApp = () =>{

    const [Categorias, setCategorias] = useState(['Batman'])

    const OnAddCategory = (newCategory) =>{
       if (Categorias.includes(newCategory)) return; 
       setCategorias([...Categorias, newCategory]) //Al principio
        
    }

    return(

        <>        
            <h1>Buscador de Gifs</h1>        
            <AddCategory 
                onNewCategory = {(e)=>OnAddCategory(e)}
            />         

            {
                Categorias.map( (d ) => (
                    
                    <GifGrid key={d} category = {d}/>
                    
                )) 
            }
        </>
    )

}