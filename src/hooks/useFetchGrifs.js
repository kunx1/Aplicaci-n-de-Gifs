import React, { useEffect, useState } from 'react'
import { getGifs } from '../components/helpers/getGifs'

const useFetchGrifs = (category) => {

    const [images, setImages] = useState([])
    const [isLoading, setIsLoading] = useState(true)

  const getImages = async () =>{
    const newImages = await getGifs(category)
    setImages(newImages)
    setIsLoading(false)
  }

  useEffect(()=>{
    getImages();
  },[ ])
  
  return{
    images,
    isLoading
  }


}

export default useFetchGrifs