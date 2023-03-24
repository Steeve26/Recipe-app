import React, { useEffect, useState } from 'react'
import styles from './popular.module.css'

export default function popular() {
  const [popular, setPopular] = useState([])
  console.log(popular);

  useEffect(() => {
    getPopular()
  }, [])

  const getPopular = async () => {
    const check = localStorage.getItem('popular')

    if (check) 
      setPopular(JSON.parse(check))
    else 
      {
        const api = await fetch (`https://api.spoonacular.com/recipes/random?apiKey=${import.meta.env.VITE_APP_API_KEY}&number=9`)
        const data = await api.json();
        localStorage.setItem('popular', JSON.stringify(data.recipes))
        setPopular(data.recipes)
        console.log(data, data.recipes)
      }

  }
  return (
    <div className={styles.popular_wrapper}>
      <h1 className={styles.header}>Trending 🔥</h1>
      <ul className={styles.popular}>
        {popular.map(recipe => {
          return (
            <div className={styles.recipe_container} key={recipe.id}>
              <li>{recipe.title}</li>
              <img src={recipe.image} alt="" draggable='false'/>
            </div>
          )
        })}
      </ul>
    </div>
  )
}