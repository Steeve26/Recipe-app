import React, { useEffect, useState } from 'react'

export default function popular() {
  const [popular, setPopular] = useState([])

  useEffect(() => {
    getPupular()
  }, [])

  const getPupular = async () => {
   const api = await fetch (`https://api.spoonacular.com/recipes/random?apiKey=ddb257deb0f74f3c92c259602c64d036&number=9`)
   const data = await api.json();
   setPopular(data.recipes)
   console.log(data);
  }
  return (
    <ul>
      {popular.map(recipe => {
        return (
          <div key={recipe.id}>
            <li>{recipe.title}</li>
            <img src={recipe.image} alt="" />
          </div>
        )
      })}
    </ul>
  )
}