import React, { useState } from 'react'
import { AddPersonaje } from './components/AddPersonaje'
import { GifGrid } from './components/GifGrid'

export const GitExpertApp = () => {

    // const categorias = ['Mario', 'Luigi', 'Sorbito'];

    const [personajes, setPersonajes] = useState(['Mario'])
    
    // // Renderizar cuando se añada un nuevo personaje
    // const handleAdd = () => {
    //     // Sabe que el estado cambio y hace una renderización
    //     setPersonajes([...personajes, 'Princesa'])
    // }

    return (
        <div>
            <h2>GitExpertApp</h2>

            <AddPersonaje setPersonajes={setPersonajes}/>

            <hr/>

            <ol>
                {
                    personajes.map(personaje => 
                        <GifGrid
                            key = {personaje} 
                            personaje= {personaje}/>)
                }
            </ol>
            
            
        </div>
    )
}
