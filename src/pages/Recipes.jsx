import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function Recipes() {
  const [recipeInfo, setRecipeInfo] = useState()
  const params = useParams();
  console.log(recipeInfo);

  useEffect(() => {
    getRecipes()
  }, [])

  const getRecipes = async () => {
    const data = await fetch(`https://api.spoonacular.com/recipes/639779/information?apiKey=${import.meta.env.VITE_APP_API_KEY}`)
    const recipe = data.json();
    console.log('recipe', recipe);
    setRecipeInfo(recipe)
  }

  return (
    <div>Recipes
      {/* <img src={recipeInfo.image} alt={recipeInfo.title} />
      <p>{recipeInfo.ingredients}</p>
      <p>{recipeInfo.summary}</p> */}
    </div>
  )
}
