import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom';
import '../App.css'

export default function cuisine() {
  const [cuisine, setCuisine] = useState([])
  let params = useParams()

  useEffect( () => {
    getCuisine(params.type)
  }, [params.type])

  const getCuisine = async (type) => {
    const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=46fabf9262f947378c58bb345258a882&cuisine=${type}`)
    const recipes = await data.json();
    setCuisine(recipes.results)
  }

  return (
    <div className='cuisine-container' >
      {cuisine.map(recipe => {
        return (
          <>
            <img src={recipe.image} alt={recipe.tilte} />
            <p>{recipe.tilte}</p>
          </>
        )
      })}
    </div>
  )
}
