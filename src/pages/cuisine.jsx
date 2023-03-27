import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import '../App.css'

export default function cuisine() {
  const [cuisine, setCuisine] = useState([])
  let params = useParams()

  useEffect( () => {
    getCuisine(params.type)
  }, [params.type])

  const getCuisine = async (type) => {
    const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${import.meta.env.VITE_APP_API_KEY}&cuisine=${type}`)
    const recipes = await data.json();
    setCuisine(recipes.results)
  }

  return (
    <div className='cuisine-container' >
      {cuisine.map((recipe, index) => {
        return (
          <Link to={`./recipe/${recipe.id}`} key={index}>
            <div className='image-container'>
              <img src={recipe.image} alt={recipe.tilte} />
              <p>{recipe.title}</p>
            </div>
          </Link>
        )
      })}
    </div>
  )
}
