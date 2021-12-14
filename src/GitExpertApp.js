import React, { useState } from 'react'

export const GitExpertApp = () => {

    // const categorias = ['Mario', 'Luigi', 'Sorbito'];

    const [personajes, setPersonajes] = useState(['Mario', 'Luigi', 'Sorbito'])
    
    // Renderizar cuando se añada un nuevo personaje
    const handleAdd = () => {
        // Sabe que el estado cambio y hace una renderización
        setPersonajes([...personajes, 'Princesa'])
    }

    return (
        <div>
            <h2>GitExpertApp</h2>
            <hr/>

            <button onClick={handleAdd}>Agregar</button>

            <ol>
                {
                    personajes.map(categoria =>{
                        return <li key={categoria}>{categoria}</li>
                    })
                }
            </ol>
            
            
        </div>
    )
}
