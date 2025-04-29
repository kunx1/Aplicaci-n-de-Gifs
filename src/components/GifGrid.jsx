import React, { useEffect, useState } from 'react'
import { getGifs } from './helpers/getGifs'
import GifItem from './GifItem'
import useFetchGrifs from '../hooks/useFetchGrifs'

const GifGrid = ({category}) => {

  const {images, isLoading} = useFetchGrifs(category)

  // const [images, setImages] = useState([])

  // const getImages = async () =>{
  //   const newImages = await getGifs(category)
  //   setImages(newImages)
  // }

  // useEffect(()=>{
  //   getImages();
  // },[ ])


  return (
    <>
      <h3> {category} </h3>

      {
        isLoading && (<h2>Cargando...</h2>)
      }
      
      <div className='card-grid'>
        {
          images.map((image) =>(
            <GifItem 
              key={image.id}
              {...image}/>
          ))
          
        }
        
      </div>
    </>
  )
}

export default GifGrid