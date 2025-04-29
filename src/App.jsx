import { useState } from 'react'

import './App.css'
import AddCategory from './components/AddCategory'
import GifGrid from './components/GifGrid'



function App() {
  const [categories, setCategories] = useState([ ])
 
  // const addCategory = () =>{
  //   setCategories(['valorant', ...categories ])
  // }

  return (
    <>
     <h1>Aplicacion de Gifs</h1>

    <AddCategory setCategories={setCategories} />

   
     
    {
        categories.map((category) =>
          <GifGrid  key={category} category={category}/>
        )
      }

    </>
  )
}

export default App
