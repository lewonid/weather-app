import React from 'react'
import styles from '../assets/ForecastBox.module.css'

import { WiNightRainWind } from 'react-icons/wi'

const ForecastBox = ({ maxTemp, minTemp, date }) => {

  const dateDate = new Date(date);

  return (
    <div className={styles.ForecastBox}>
        <div className={styles.Details}>
            <span className={styles.ForecastIcon}>< WiNightRainWind /></span>
            <h2>+{maxTemp}°/<span className={styles.NightCelsius}>+{minTemp}</span></h2>
         </div>
        {/* <p>10 April</p> */}
        <div className={styles.Date}>
          <p>{dateDate.toLocaleDateString(undefined, {day:'2-digit', month:'long'})}</p>
          <p>{dateDate.toLocaleDateString(undefined, {weekday:'long'})}</p>
        </div>
    </div>
  )
}

export default ForecastBox