import React, { useState } from 'react'
import PropTypes from 'prop-types'

export const AddPersonaje = ({setPersonajes}) => {

    const [inputValue, setInputValue] = useState('')

    const handleInputChange = (e) =>{
        setInputValue( e.target.value)
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        // console.log("Se ha subido")

        if(inputValue.trim().length > 2){
            setPersonajes(cats => [ inputValue, ...cats])
            setInputValue('')
        }
        
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                    type='text'
                    value={inputValue}
                    onChange={ handleInputChange }
                />
            </form>
            
        </div>
    )
}

AddPersonaje.prototype = {
    setPersonajes: PropTypes.func.isRequired
}
