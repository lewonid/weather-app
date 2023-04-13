import React from 'react'

import styles from '../assets/TodayOverview.module.css';

import { HiArrowTopRightOnSquare } from 'react-icons/hi2'
import WeatherBox from './WeatherBox';

const TodayOverview = ({ currentWeatherData, isLoading }) => {

  // console.log(currentWeatherData);
  // console.log(isLoading)

  // if(currentWeatherData != 0)
  // {console.log(currentWeatherData.location.name)}
  // else{console.log('shit')}
  // if(isLoading === false){
  //   console.log(currentWeatherData.location.name);
  // }

  // if(currentWeatherData != 0)
  if(isLoading === false)
  {
    var windSpeed = currentWeatherData.current.wind_kph + ' km/h';
    var precipitation = currentWeatherData.current.precip_mm + 'mm';
    var pressure = currentWeatherData.current.pressure_mb + 'mb';
    var uvIndex = currentWeatherData.current.uv;
  }

  return (
    <div className={styles.TodayOverview}>
        <div className={styles.header}>
          <h2>Today overview</h2>
          <p><span className={styles.Desktop}>More detail</span> <span><HiArrowTopRightOnSquare /></span></p>
        </div>
        <div className={styles.WeatherDetails}>
          <WeatherBox condition={'Wind Speed'} value={ windSpeed }/>
          <WeatherBox condition={'Precipitation'} value={ precipitation }/>
          <WeatherBox condition={'Pressure'} value={ pressure }/>
          <WeatherBox condition={'UV Index'} value={ uvIndex }/>
        </div>
      </div>
  )
}

export default TodayOverview