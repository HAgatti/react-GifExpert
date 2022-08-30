import { useState } from 'react';


export const AddCategory = ({ onNewCategory }) => {
//---------------------------------------------------------------------//
    const [ inputValue, setInputValue ] = useState('');

    const onInputChange = ( event) => {
        setInputValue( event.target.value );
    }
//---------------------------------------------------------------------//
    const onSubmitEvento = ( event ) => {
        event.preventDefault();
        if( inputValue.trim().length <= 1) return;

        // setCategories( categories => [ inputValue, ...categories ]);
        setInputValue('');
        onNewCategory( inputValue.trim() );
    }
//---------------------------------------------------------------------//
    return (
        // <form onSubmit={ onSubmit }> IMPORTANTE(*):Esto es la version resumida de la linea de abajo
        <form onSubmit={ (eventoEnter)=>onSubmitEvento(eventoEnter) }>       
            <input 
                type="text"
                placeholder="Buscar gifs"
                value={ inputValue }
                // onChange={ onInputChange } *
                onChange={ (eventoChange)=>onInputChange(eventoChange)} 
            />
        </form>
    )
}