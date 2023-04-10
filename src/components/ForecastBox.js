import React from 'react'
import styles from '../assets/ForecastBox.module.css'

import { WiNightRainWind } from 'react-icons/wi'

const ForecastBox = () => {
  return (
    <div className={styles.ForecastBox}>
        <div className={styles.Details}>
            <span className={styles.ForecastIcon}>< WiNightRainWind /></span>
            <h2>+16°/<span className={styles.NightCelsius}>+8</span></h2>
         </div>
        <p>10 April</p>
        <p>Monday</p>
    </div>
  )
}

export default ForecastBox