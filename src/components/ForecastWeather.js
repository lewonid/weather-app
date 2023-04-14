import React from 'react'
import { useEffect, useState } from 'react';
import { ClipLoader } from 'react-spinners'

import styles from '../assets/ForecastWeather.module.css';
import { HiArrowTopRightOnSquare } from 'react-icons/hi2'

import ForecastBox from './ForecastBox';
import { fetchData, weatherOptions } from '../utils/fetchData';

const ForecastWeather = ({ currentWeatherData, isLoading, getData }) => {

  const [forecastData, setForecastData] = useState();

  if(isLoading === false){
    var forecastLocation = currentWeatherData.location.name;
  }

  useEffect(() => {
    const fetchForecastData = async() => {
      const forecastData = await fetchData(`https://weatherapi-com.p.rapidapi.com/forecast.json?q=${forecastLocation}&days=3`, weatherOptions)
      setForecastData(forecastData);
      getData(forecastData);
    }
    if(isLoading === false){
      fetchForecastData();
    } // eslint-disable-next-line
  }, [isLoading, forecastLocation])

  if(forecastData){
    var forecastDays = forecastData.forecast.forecastday;
  }
  // console.log(forecastData)
  //Loader
  if(forecastDays === undefined) {
    return(
        <div style={{display:'flex', justifyContent:'center', alignItems:'center', width:'50%'}}>
            <ClipLoader color='#2f82fe' />
        </div>
    )
  }
  // console.log(forecastDays[1])
  return (
    <div className={styles.ForecastWeather}>
      <div className={styles.header}>
          <h2>3 days Forecast</h2>
          <p><span className={styles.Desktop}>More detail </span><span><HiArrowTopRightOnSquare /></span></p>
        </div>
        {forecastDays.map(forecastDays => (
          <ForecastBox
            key={forecastDays.date}
            maxTemp={forecastDays.day.maxtemp_c} 
            minTemp={forecastDays.day.mintemp_c}
            date={forecastDays.date}
            />
          ))}
    </div>
  )
}

export default ForecastWeather