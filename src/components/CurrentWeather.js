import React from 'react'
import { useState, useEffect } from 'react'

// import moment from 'moment/moment'

import { ClipLoader } from 'react-spinners'
import { FiSun } from 'react-icons/fi'

import styles from '../assets/CurrentWeather.module.css'
import HourBox from './HourBox'
import AstroBox from './AstroBox'
import AlertBox from './AlertBox'

import sunnyBg from '../assets/img/sunny.webp'
import clear_nightBg from '../assets/img/clear_night.webp'
import partlyCloudyBg from '../assets/img/partly_cloudy.webp'
import cloudyBg from '../assets/img/cloudy.webp'
import mistBg from '../assets/img/mist.webp'
import rainBg from '../assets/img/rainy_weather_dark.webp'
import snowBg from '../assets/img/snow.webp'


const CurrentWeather = ({ currentWeatherData, isLoading, forecastData }) => {
    // console.log(forecastData)

    const [localTime, setLocalTime] = useState([]);
    const [localHour, setLocalHour] = useState([]);
    
    if(isLoading === false){
        var name = currentWeatherData.location.name;
        var region = currentWeatherData.location.region;
        var country = currentWeatherData.location.country;
        var temp = currentWeatherData.current.temp_c;
        var condition = currentWeatherData.current.condition.text;
    }
// formatting time
    useEffect(() => {
        if(isLoading === false){
            const dateTime = new Date(currentWeatherData.location.localtime);
            // console.log(currentWeatherData.location.localtime);
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
        var iconUrl = forecastData.current.condition.icon;
    }
    if(forecastData.length === 0){
        // console.log('empty')
        
    }else{
        var dataByHours = forecastData.forecast.forecastday[0].hour;
        var usEpaIndex = forecastData.current.air_quality['us-epa-index'];

        if(forecastData.alerts.alert.length > 0){ // checking if there are alerts
            var alertsData = forecastData.alerts.alert;
            console.log(alertsData);
        }else{ // if not, empty array.
            alertsData = [];
        }
    }
    
    let airQualityType;
    // Check the value of usEpaIndex and assign the corresponding type
    if (usEpaIndex === 1) {
        airQualityType = 'Good';
    } else if (usEpaIndex === 2) {
        airQualityType = 'Moderate';
    } else if (usEpaIndex === 3) {
        airQualityType = 'Unhealthy for Sensitive Groups';
    } else if (usEpaIndex === 4) {
        airQualityType = 'Unhealthy';
    } else if (usEpaIndex === 5) {
        airQualityType = 'Very Unhealthy';
    } else if (usEpaIndex === 6) {
        airQualityType = 'Hazardous';
    } else {
        airQualityType = 'Unknown';
    }

    // background image cases
    if (isLoading === false){
        var backgroundImage = sunnyBg;

        if(currentWeatherData.current.condition.text === 'Partly cloudy'){
            backgroundImage = partlyCloudyBg;
        }else if(currentWeatherData.current.condition.text === 'Clear'){
            backgroundImage = clear_nightBg;
        }else if(currentWeatherData.current.condition.text === 'Cloudy'){
            backgroundImage = cloudyBg;
        }else if(currentWeatherData.current.condition.text === 'Overcast'){
            backgroundImage = cloudyBg;
        }else if(currentWeatherData.current.condition.text === 'Mist'){
            backgroundImage = mistBg;
        }else if(currentWeatherData.current.condition.text === 'Fog'){
            backgroundImage = mistBg;
        }else if(currentWeatherData.current.condition.text.includes('rain')){
            backgroundImage = rainBg;
        }else if(currentWeatherData.current.condition.text.includes('drizzle')){
            backgroundImage = rainBg;
        }else if(currentWeatherData.current.condition.text.includes('snow')){
            backgroundImage = snowBg;
        }
    }

    // Loader
    if((isLoading === true) || (localHour.length === 0) || (forecastData.length === 0) || (alertsData === undefined)) {
        return(
            <div style={{display:'flex', justifyContent:'center', alignItems:'center', width:'50%'}}>
                <ClipLoader color='#2f82fe' />
            </div>
        )
    }

    return (
        <div style={{backgroundImage: `url(${backgroundImage})`}} className={styles.CurrentWeather} >
        {/*  <div className={background}> */}
            <div className={styles.Header}>
                <div className={styles.Location}>
                    <h3>{name}</h3>
                    <p>{region}, {country}</p>
                </div>
                {/* <p>08:54 AM</p> */}
                <p>{localTime}</p>
            </div>
            {
                alertsData.map(alert => (
                    <AlertBox 
                    key={alert.headline}
                    headline={alert.headline}
                    severity={alert.severity}
                    areas={alert.areas}
                    />
                ))
            }
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
                        {/* <p>Min. temp.: {minTemp}° C</p> */}
                        <p>Air quality: {airQualityType}</p>
                    </div>
                </div>
                <div className={styles.line}></div>
                <div className={styles.WeatherByHours}>
                    <p className={styles.Title}>Hourly Weather</p>
                    {/* <HourBox time={{}} icon={{}} temperature={{}}/> */}
                    <div>
                    { 
                        dataByHours.slice(localHour, localHour + 5).map(
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
                </div>
                <div className={styles.Astro}>
                    <p className={styles.Title}>Sunrise</p>
                    <AstroBox icon={<FiSun />} type={'Sunrise'} astroTime={forecastData.forecast.forecastday[0].astro.sunrise} localTime={localTime} localHour={localHour}/>
                </div>
            </div>
        </div>
    )
}

export default CurrentWeather