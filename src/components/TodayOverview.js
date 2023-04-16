import React from 'react'

import styles from '../assets/TodayOverview.module.css';

import { HiArrowTopRightOnSquare } from 'react-icons/hi2'
import { RiWindyLine } from 'react-icons/ri'
import { SiRainmeter } from 'react-icons/si'
import { AiOutlineCompress } from 'react-icons/ai'
import { IoSunny } from 'react-icons/io5'

import { ClipLoader } from 'react-spinners'

import WeatherBox from './WeatherBox';

const TodayOverview = ({ currentWeatherData, isLoading }) => {

  if(isLoading === false){
    var windSpeed = currentWeatherData.current.wind_kph + ' km/h';
    var precipitation = currentWeatherData.current.precip_mm + 'mm';
    var pressure = currentWeatherData.current.pressure_mb + 'mb';
    var uvIndex = currentWeatherData.current.uv;
  }

  if(currentWeatherData === undefined){
    return(
      <div style={{display:'flex', justifyContent:'center', alignItems:'center', width:'50%'}}>
            <ClipLoader color='#2f82fe' />
        </div>
    )
  }

  return (
    <div className={styles.TodayOverview}>
        <div className={styles.header}>
          <h2>Today overview</h2>
          <p><span className={styles.Desktop}>More detail</span> <span><HiArrowTopRightOnSquare /></span></p>
        </div>
        <div className={styles.WeatherDetails}>
          <WeatherBox condition={'Wind Speed'} value={ windSpeed } icon={<RiWindyLine />}/>
          <WeatherBox condition={'Precipitation'} value={ precipitation } icon={<SiRainmeter />}/>
          <WeatherBox condition={'Pressure'} value={ pressure } icon={<AiOutlineCompress />}/>
          <WeatherBox condition={'UV Index'} value={ uvIndex } icon={<IoSunny />}/>
        </div>
      </div>
  )
}

export default TodayOverview