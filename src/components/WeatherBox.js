import React from 'react'

import styles from '../assets/WeatherBox.module.css';

// import { AiFillCaretDown } from 'react-icons/ai'

const WeatherBox = ( {condition, value, icon }) => {
  return (
    <div className={styles.WeatherBox}>
        <span>{icon}</span>
        <div className={styles.Details}>
            <p>{condition}</p>
            <h2>{value}</h2>
         </div>
        {/* <p><AiFillCaretDown /> 2km/h</p> */}
    </div>
  )
}

export default WeatherBox