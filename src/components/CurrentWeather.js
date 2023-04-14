import React from 'react'

import { IoRainySharp } from 'react-icons/io5'
import { ClipLoader } from 'react-spinners'

import styles from '../assets/CurrentWeather.module.css'
import HourBox from './HourBox'
import AstroBox from './AstroBox'

const CurrentWeather = ({ currentWeatherData, isLoading, forecastData }) => {
    // console.log(currentWeatherData)
    
    if(isLoading === false){
        var name = currentWeatherData.location.name;
        var region = currentWeatherData.location.region;
        var country = currentWeatherData.location.country;
        var temp = currentWeatherData.current.temp_c;
        var condition = currentWeatherData.current.condition.text;
        const localtime = () => {
            const dateTime = new Date(currentWeatherData.location.localtime);

            const hours = dateTime.getHours();
            const minutes = dateTime.getMinutes();

            const formattedHours = hours.toString().padStart(2, '0');
            const formattedMinutes = minutes.toString().padStart(2, '0');

            const timeString = `${formattedHours}:${formattedMinutes}`;
            
            if(hours < 12){
                return timeString + ' AM';
            }else {
                return timeString + ' PM';
            }
        }
        var localTime = localtime();
    }
    
    if(forecastData.current){
        var feelsLike = forecastData.current.feelslike_c;
        var chanceOfRain = forecastData.forecast.forecastday[0].day.daily_chance_of_rain;
        var maxTemp = forecastData.forecast.forecastday[0].day.maxtemp_c;
        var minTemp = forecastData.forecast.forecastday[0].day.mintemp_c;
        var iconUrl = forecastData.current.condition.icon;
    }

    // here to continue
    // to extract forecast data by hours to get chance_of_rain

    // Loader
    if(isLoading === true) {
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
                    <p className={styles.Title}>Chance of rain</p>
                    <HourBox time={{}} percentage={{}} />
                    <HourBox />
                    <HourBox />
                    <HourBox />
                </div>
                <div className={styles.Astro}>
                    <p className={styles.Title}>Sunrise & Sunset</p>
                    <AstroBox />
                    <AstroBox />
                </div>
            </div>
        </div>
    )
}

export default CurrentWeather