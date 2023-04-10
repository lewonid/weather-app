import React from 'react'

import styles from '../assets/ForecastWeather.module.css';
import { HiArrowTopRightOnSquare } from 'react-icons/hi2'
import ForecastBox from './ForecastBox';

const ForecastWeather = () => {
  return (
    <div className={styles.ForecastWeather}>
      <div className={styles.header}>
          <h2>7 days Forecast</h2>
          <p>More detail <span><HiArrowTopRightOnSquare /></span></p>
        </div>
        <ForecastBox />
        <ForecastBox />
        <ForecastBox />
    </div>
  )
}

export default ForecastWeather