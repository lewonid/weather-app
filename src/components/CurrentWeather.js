import React from 'react'

import { IoRainySharp } from 'react-icons/io5'
import { ClipLoader } from 'react-spinners'

import styles from '../assets/CurrentWeather.module.css'

const CurrentWeather = ({ currentWeatherData, isLoading }) => {
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
                <IoRainySharp className={styles.Icon}/>
                <div className={styles.WeatherData}>
                    <h1 style={{color: 'white'}}>{temp}° C</h1>
                    <div style={{textAlign: 'right'}}>
                        <p>{condition}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CurrentWeather