import React, { useState } from 'react'

const AddCategory = ({setCategories, }) => {

  const [value, setValue] = useState('')

  const onSubmit = (e)=>{
    e.preventDefault()

   

    setCategories(categories => [value, ...categories])
    setValue('')
  }

  return (
    <form onSubmit={onSubmit}>
      <input type="text" 
      placeholder='Ingresa tu tarea'
      value={value}
      onChange={(e)=>setValue(e.target.value)}
       />

    </form>
  )
}

export default AddCategory