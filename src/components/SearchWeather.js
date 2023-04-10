import React from 'react'

import styles from '../assets/SearchWeather.module.css';

const SearchWeather = () => {
  return (
    <div className={styles.SearchWeather}>
        <div className={styles.Date}>
            <h1>April 2023</h1>
            <p>Sunday, April 9, 2023</p>
        </div>
        <form className={styles.form}>
            <input
             type='text'
             value={undefined}
             placeholder='&#x1F50E;&#xFE0E; Search location'
                        
            />
        </form>
    </div>
  )
}

export default SearchWeather