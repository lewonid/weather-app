import React from 'react'
import { useState, useEffect } from 'react'

import { ClipLoader } from 'react-spinners'
import { FiSun } from 'react-icons/fi'
import { FiSunset } from 'react-icons/fi'

import styles from '../assets/CurrentWeather.module.css'
import HourBox from './HourBox'
import AstroBox from './AstroBox'

const CurrentWeather = ({ currentWeatherData, isLoading, forecastData }) => {
    // console.log(currentWeatherData)

    const [localTime, setLocalTime] = useState([]);
    const [localHour, setLocalHour] = useState([]);
    
    if(isLoading === false){
        var name = currentWeatherData.location.name;
        var region = currentWeatherData.location.region;
        var country = currentWeatherData.location.country;
        var temp = currentWeatherData.current.temp_c;
        var condition = currentWeatherData.current.condition.text;
    }

    useEffect(() => {
        if(isLoading === false){
            const dateTime = new Date(currentWeatherData.location.localtime);
            const hours = dateTime.getHours();
            const minutes = dateTime.getMinutes();
            const formattedHours = hours.toString().padStart(2, '0');
            const formattedMinutes = minutes.toString().padStart(2, '0');
            const timeString = `${formattedHours}:${formattedMinutes}`;

            setLocalHour(parseInt(formattedHours));
            setLocalTime(timeString);
    }
    }, [currentWeatherData, isLoading])
    

    if(forecastData.current){
        var feelsLike = forecastData.current.feelslike_c;
        var chanceOfRain = forecastData.forecast.forecastday[0].day.daily_chance_of_rain;
        var maxTemp = forecastData.forecast.forecastday[0].day.maxtemp_c;
        var minTemp = forecastData.forecast.forecastday[0].day.mintemp_c;
        var iconUrl = forecastData.current.condition.icon;
    }
    if(forecastData.length === 0){
        // console.log('empty')
        
    }else{
        var dataByHours = forecastData.forecast.forecastday[0].hour;
    }

    // Loader
    if((isLoading === true) || (localHour.length === 0) || (forecastData.length === 0)) {
        return(
            <div style={{display:'flex', justifyContent:'center', alignItems:'center', width:'50%'}}>
                <ClipLoader color='#2f82fe' />
            </div>
        )
    }

    return (
        <div className={styles.CurrentWeather}>
            <div className={styles.Header}>
                <div className={styles.Location}>
                    <h3>{name}</h3>
                    <p>{region}, {country}</p>
                </div>
                {/* <p>08:54 AM</p> */}
                <p>{localTime}</p>
            </div>
            <div className={styles.MainWeather}>
                {/* <IoRainySharp className={styles.Icon}/> */}
                <img className={styles.Icon} src={iconUrl} alt={condition}/>
                <div className={styles.WeatherData}>
                    <h1 style={{color: 'white'}}>{temp}° C</h1>
                    <div style={{textAlign: 'right'}}>
                        <p>{condition}</p>
                    </div>
                </div>
                <div className={styles.MoreData}>
                    <div>
                        <p>Feels like: {feelsLike}° C</p>
                        <p>Chance of rain: {chanceOfRain} %</p>
                    </div>
                    <div>
                        <p>Max. temp.: {maxTemp}° C</p>
                        <p>Min. temp.: {minTemp}° C</p>
                    </div>
                </div>
                <div className={styles.line}></div>
                <div className={styles.WeatherByHours}>
                    <p className={styles.Title}>Hourly Weather</p>
                    {/* <HourBox time={{}} icon={{}} temperature={{}}/> */}
                    { 
                        dataByHours.slice(localHour + 1, localHour + 5).map(
                            hour => (
                                <HourBox
                                 time={hour.time}
                                 temp={hour.temp_c}
                                 icon={hour.condition.icon}
                                 key={hour.time}
                                 />
                            )
                        ) 
                    }
                </div>
                <div className={styles.Astro}>
                    <p className={styles.Title}>Sunrise & Sunset</p>
                    <AstroBox icon={<FiSun />} type={'Sunrise'} astroTime={forecastData.forecast.forecastday[0].astro.sunrise} localTime={localTime} localHour={localHour}/>
                    <AstroBox icon={<FiSunset />} type={'Sunset'} astroTime={forecastData.forecast.forecastday[0].astro.sunset} localTime={localTime} localHour={localHour}/>
                </div>
            </div>
        </div>
    )
}

export default CurrentWeather