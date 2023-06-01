import React, { useState } from 'react'

export const GiftExpertApp = () => {


    //const categorias = ['One Puch', 'Samurai x', 'Dragon ball'];
    const[categorias, setCategorias] = useState(['One Puch', 'Samurai', 'Goku']);

    const handleAdd = () => {
        //setCategorias([...categorias,'Naruto'])
        setCategorias(cats => [...cats, 'naruto'])
    }
  return (
    <>
        <h2>Gift Expert app</h2>
        <hr></hr>

        <button onClick={handleAdd} >Agregar</button>
        <ol>
            { categorias.map( categoria => {
                return <li key={categoria}>{categoria}</li>
            }) }
        </ol>
    </>
  )
}
