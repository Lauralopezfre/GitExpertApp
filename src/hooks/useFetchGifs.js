import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGifs"

export const useFetchGifs = ( personaje ) =>{
    const [state, setstate] = useState({
        data:[],
        loading: true
    })

    useEffect( () => {
        getGifs( personaje ).then(imgs => {

            setTimeout( () => {
                console.log(imgs)
                setstate({
                    data: imgs,
                    loading: false
                })
            }, 3000)

            
        })
    }, [personaje])
    return state;
}