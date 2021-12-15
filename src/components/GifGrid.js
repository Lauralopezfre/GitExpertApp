import React, { useState, useEffect } from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
// import { getGifs } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ personaje }) => {

    const state = useFetchGifs( personaje );

    return (
        <>
            <h3>{personaje}</h3>
            <div className='card-gird'>
                    {state.data.map(img => (
                        <GifGridItem
                            key={img.id} 
                            img={img}/>
                        ))}
                </div>
        </>
        
    )
}
