import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

export default function searchResults() {
  const [searchResults, setSearchResults] = useState([]);
  const params = useParams()

  useEffect(() => {
    getResults([params.result])
  }, [params.result])

  const getResults = async (query) => {
    const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${import.meta.env.VITE_APP_API_KEY}&query=${query}`)
    const recipes = await data.json()
    setSearchResults(recipes.results)
  }
  return (
    <div className='search-results-container' >
      {searchResults.map((recipe, index) => {
        return (
          <Link to={`./recipe/${recipe.id}`}>
            <div className='image-container' key={index}>
              <img src={recipe.image} alt={recipe.tilte} />
              <p>{recipe.title}</p>
            </div>
          </Link>
        )
      })}
    </div>
  )
}
