import React from 'react'

import styles from '../assets/TodayOverview.module.css';

import { HiArrowTopRightOnSquare } from 'react-icons/hi2'
import WeatherBox from './WeatherBox';

const TodayOverview = () => {
  return (
    <div className={styles.TodayOverview}>
        <div className={styles.header}>
          <h2>Today overview</h2>
          <p>More detail <span><HiArrowTopRightOnSquare /></span></p>
        </div>
        <div className={styles.WeatherDetails}>
          <WeatherBox />
          <WeatherBox />
          <WeatherBox />
          <WeatherBox />
        </div>
      </div>
  )
}

export default TodayOverview