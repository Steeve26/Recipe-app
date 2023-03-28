import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import '../App.css'

export default function Recipes() {
  const [recipeInfo, setRecipeInfo] = useState({})
  const [content, setContent] = useState('summary')
  const params = useParams();

  useEffect(() => {
    getRecipes()
  }, [params.food])

  const getRecipes = async () => {
    const data = await fetch(`https://api.spoonacular.com/recipes/${params.food}/information?apiKey=${import.meta.env.VITE_APP_API_KEY}`)
    const recipe = await data.json();
    console.log('recipe', recipe);
    setRecipeInfo(recipe)
  }

  return (
    <div className='recipe-details-container'>
      <section className="left-section">
        <p className='title'>{recipeInfo.title}</p>
        <img src={recipeInfo.image} alt={recipeInfo.title} />
      </section>

      <section className="right-section">
        <div className="buttons">
          <button className={`${content == 'summary' && 'active'}`} 
           onClick={() => setContent('summary')}>About</button>
          <button className={`${content  == 'instructions' && 'active'}`} 
           onClick={() => setContent('instructions')}>Instructions</button>
        </div>

        <div className="content">
          {content == 'summary' && <p dangerouslySetInnerHTML={{__html: recipeInfo.summary ? recipeInfo.summary : 'Sorry, summary unavailable'}}></p>}
          {
            <div className="instruction-wrapper">
            { content == 'instructions' && 
              <p dangerouslySetInnerHTML={{__html: recipeInfo.instructions ? 
                recipeInfo.instructions : 'Sorry, instructions unavailable'}}>
              </p>
            }
            </div>
          }
        </div>
      </section>
    </div>
  )
}
