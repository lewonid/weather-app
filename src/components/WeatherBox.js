import React from 'react'

import styles from '../assets/WeatherBox.module.css';

import { RiWindyLine } from 'react-icons/ri'
import { AiFillCaretDown } from 'react-icons/ai'

const WeatherBox = () => {
  return (
    <div className={styles.WeatherBox}>
        <span><RiWindyLine /></span>
        <div className={styles.Details}>
            <p>Wind Speed</p>
            <h2>12 km/h</h2>
         </div>
        <p><AiFillCaretDown /> 2km/h</p>
    </div>
  )
}

export default WeatherBox