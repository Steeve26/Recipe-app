import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
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
            <Link to={`./recipe/${recipe.id}`} key={recipe.id}>
              <div className={styles.recipe_container}>
                <li>{recipe.title}</li>
                <img src={recipe.image} alt="" draggable='false'/>
              </div>
            </Link>
          )
        })}
      </ul>
    </div>
  )
}