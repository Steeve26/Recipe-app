import React, { useEffect, useState } from 'react'
import {Link } from 'react-router-dom';
import styles from './veggies.module.css'

export default function veggies() {
  const [veggie, setVeggie] = useState([])

  useEffect(() => {
    getveggie()
  }, [])

  const getveggie = async () => {
    const check = localStorage.getItem('veggie')

    if (check) 
      setVeggie(JSON.parse(check))
    else 
      {
        const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${import.meta.env.VITE_APP_API_KEY}&number=9&tags=vegetarian`)
        const data = await api.json();
        localStorage.setItem('veggie', JSON.stringify(data.recipes))
        setVeggie(data.recipes)
        console.log(data, data.recipes)
      }

  }
  return (
    <div className={styles.veggie_wrapper}>
      <h1 className={styles.header}>Our Veggie picks 🍅</h1>
      <ul className={styles.veggies} >
        {veggie.map(recipe => {
          return (
            <Link to={`/recipe/${recipe.id}`} key={recipe.id}>
              <div className={styles.recipe_container}>
                <li>{recipe.title}</li>
                <img src={recipe.image} alt={recipe.title} draggable="false" />
              </div>
            </Link>
          )
        })}
      </ul>
    </div>
  )
}