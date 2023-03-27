import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

export default function searchResults() {
  const [searchResults, setSearchResults] = useState([]);
  const params = useParams()

  console.log('results', searchResults);

  useEffect(() => {
    getResults([params.result])
  }, [params.result])

  const getResults = async (query) => {
    const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${import.meta.env.VITE_APP_API_KEY}&query=${query}`)
    const recipes = await data.json()
    setSearchResults(recipes.results)
    console.log('recipes', recipes);
  }
  return (
    <div className='search-results-container' >
      {searchResults.map((recipe, index) => {
        return (
          <div className='image-container' key={index}>
            <img src={recipe.image} alt={recipe.tilte} />
            <p>{recipe.title}</p>
          </div>
        )
      })}
    </div>
  )
}
